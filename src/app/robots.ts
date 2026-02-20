export const dynamic = "force-static";
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/studio/',
        },
        sitemap: 'https://sumahospitalario.mx/sitemap.xml',
    }
}
