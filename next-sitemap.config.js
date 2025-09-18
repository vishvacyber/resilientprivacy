/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://resilientprivacy.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/protected/', '/api/'],
      },
    ],
    additionalSitemaps: ['https://resilientprivacy.com/sitemap.xml'],
  },
  exclude: ['/protected/*', '/api/*'],
  changefreq: 'weekly',
  priority: 0.7,
}
