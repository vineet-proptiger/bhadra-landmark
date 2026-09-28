export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: 'http://bhadralandmark95.com/sitemap.xml',
  }
}
