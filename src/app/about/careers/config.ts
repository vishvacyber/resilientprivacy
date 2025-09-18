// Careers Configuration
// Update this URL with your actual Notion careers page

export const CAREERS_CONFIG = {
  // Your actual Notion careers page URL
  NOTION_URL:
    'https://resilientprivacy.notion.site/ebd/24b57ead966880b9b019f3d65c3e3efe',

  // Optimized embed parameters for better integration
  EMBED_PARAMS: '',

  // Theme settings
  THEME: {
    PRIMARY_COLOR: 'purple',
    SECONDARY_COLOR: 'blue',
    BACKGROUND: 'slate-900',
  },
}

// Get the full embed URL
export const getNotionEmbedUrl = () => {
  return `${CAREERS_CONFIG.NOTION_URL}${CAREERS_CONFIG.EMBED_PARAMS}`
}
