#!/usr/bin/env node
/* eslint-disable security/detect-non-literal-fs-filename */

const sharp = require('sharp')
const fs = require('fs')
const path = require('path')

const IMAGES_DIR = path.join(__dirname, '../public/images')
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized')

// Create output directory if it doesn't exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true })
}

// Image optimization configurations
const configs = [
  {
    suffix: '-webp',
    format: 'webp',
    quality: 85,
    width: 1920,
    height: 1080,
  },
  {
    suffix: '-avif',
    format: 'avif',
    quality: 80,
    width: 1920,
    height: 1080,
  },
  {
    suffix: '-mobile',
    format: 'webp',
    quality: 80,
    width: 768,
    height: 432,
  },
  {
    suffix: '-thumbnail',
    format: 'webp',
    quality: 75,
    width: 300,
    height: 300,
  },
]

async function optimizeImage(inputPath, outputDir) {
  // Security check: ensure input path is within allowed directory
  const resolvedInputPath = path.resolve(inputPath)
  const allowedDir = path.resolve(__dirname, '../public/images')
  
  // Additional security: check for path traversal attempts
  if (inputPath.includes('..') || inputPath.includes('~') || inputPath.startsWith('/')) {
    console.error(`  ✗ Security error: Invalid path detected: ${inputPath}`)
    return
  }
  
  if (!resolvedInputPath.startsWith(allowedDir)) {
    console.error(`  ✗ Security error: Input path outside allowed directory: ${inputPath}`)
    return
  }
  
  const filename = path.basename(inputPath, path.extname(inputPath))
  
  // Validate filename to prevent path traversal
  if (!/^[a-zA-Z0-9-_]+$/.test(filename)) {
    console.error(`  ✗ Security error: Invalid filename: ${filename}`)
    return
  }
  
  console.log(`Optimizing ${filename}...`)
  
  for (const config of configs) {
    const outputPath = path.join(outputDir, `${filename}${config.suffix}.${config.format}`)
    
    try {
      // Validate input file exists and is readable
      if (!fs.existsSync(inputPath)) {
        console.error(`  ✗ Input file not found: ${inputPath}`)
        continue
      }
      
      // Additional security: validate file is actually an image
      const stats = fs.statSync(inputPath)
      if (!stats.isFile() || stats.size === 0) {
        console.error(`  ✗ Invalid file: ${inputPath}`)
        continue
      }
      
      await sharp(inputPath)
        .resize(config.width, config.height, {
          fit: 'cover',
          position: 'center',
        })
        .toFormat(config.format, { quality: config.quality })
        .toFile(outputPath)
      
      const stats = fs.statSync(outputPath)
      const originalStats = fs.statSync(inputPath)
      const reduction = originalStats.size > 0 ? ((originalStats.size - stats.size) / originalStats.size * 100).toFixed(1) : '0'
      
      console.log(`  ✓ ${config.suffix}.${config.format}: ${(stats.size / 1024).toFixed(1)}KB (${reduction}% reduction)`)
    } catch (error) {
      console.error(`  ✗ Error creating ${config.suffix}.${config.format}:`, error.message)
    }
  }
}

async function optimizeAllImages() {
  console.log('Starting image optimization...\n')
  
  try {
    // Validate directories exist
    if (!fs.existsSync(IMAGES_DIR)) {
      console.error(`Error: Images directory not found: ${IMAGES_DIR}`)
      return
    }
    
    const files = fs.readdirSync(IMAGES_DIR)
    const imageFiles = files.filter(file => {
      // Security: validate file extension and name
      const isValidExtension = /\.(jpg|jpeg|png)$/i.test(file)
      const isValidName = /^[a-zA-Z0-9-_]+\.(jpg|jpeg|png)$/i.test(file)
      const isNotOptimized = !file.includes('optimized')
      const isNotAdvisor = !file.includes('advisors') // Skip advisor images for now
      
      return isValidExtension && isValidName && isNotOptimized && isNotAdvisor
    })
    
    console.log(`Found ${imageFiles.length} images to optimize\n`)
    
    for (const file of imageFiles) {
      const inputPath = path.join(IMAGES_DIR, file)
      await optimizeImage(inputPath, OUTPUT_DIR)
      console.log('')
    }
    
    console.log('Image optimization complete!')
    console.log(`Optimized images saved to: ${OUTPUT_DIR}`)
  } catch (error) {
    console.error('Error during image optimization:', error.message)
    process.exit(1)
  }
}

// Run optimization
optimizeAllImages().catch(console.error)
