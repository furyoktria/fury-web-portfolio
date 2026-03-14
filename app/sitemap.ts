export const baseUrl = 'https://tbd-taikisha.vercel.app'

export default async function sitemap() {
  let routes = ['', '/about', '/services', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
