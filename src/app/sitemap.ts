import { MetadataRoute } from 'next'
import { MOCK_PROJECTS } from '@/lib/mock-data'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sumahospitalario.mx'

    // Static routes
    const routes = [
        '',
        '/nosotros',
        '/soluciones',
        '/proyectos',
        '/contacto',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Dynamic routes (Projects)
    const projectRoutes = MOCK_PROJECTS.map((project) => ({
        url: `${baseUrl}/proyectos/${project.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [...routes, ...projectRoutes]
}
