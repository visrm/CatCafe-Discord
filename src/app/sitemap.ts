import { MetadataRoute } from 'next'
import { siteConfig, staffDirectory } from '@/lib/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteConfig.siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteConfig.siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.siteUrl}/features`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteConfig.siteUrl}/stats`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.6 },
    { url: `${siteConfig.siteUrl}/members`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteConfig.siteUrl}/staff`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteConfig.siteUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteConfig.siteUrl}/rules`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${siteConfig.siteUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${siteConfig.siteUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  const staffRoutes: MetadataRoute.Sitemap = staffDirectory.map((member) => ({
    url: `${siteConfig.siteUrl}/staff/${member.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.4,
  }))

  return [...staticRoutes, ...staffRoutes]
}
