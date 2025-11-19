import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { MOCK_PROJECTS } from "@/lib/mock-data";

interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = MOCK_PROJECTS.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
                <Link href="/proyectos">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Proyectos
                </Link>
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery (Single image for MVP) */}
                <div className="relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Content */}
                <div>
                    <div className="flex items-center gap-4 mb-6">
                        <Badge variant="secondary" className="text-sm px-3 py-1 capitalize">
                            {project.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground flex items-center">
                            <Calendar className="h-4 w-4 mr-1" /> {project.year}
                        </span>
                    </div>

                    <h1 className="text-4xl font-bold tracking-tight mb-6">{project.title}</h1>

                    <div className="flex items-center text-muted-foreground mb-8">
                        <MapPin className="h-5 w-5 mr-2 text-primary" />
                        <span className="text-lg">{project.location}</span>
                    </div>

                    <div className="prose prose-slate max-w-none mb-8">
                        <p className="text-lg leading-relaxed text-slate-700">
                            {project.description}
                        </p>
                        <p className="text-slate-600 mt-4">
                            Este proyecto representa nuestro compromiso con la excelencia en el sector salud.
                            Implementamos soluciones certificadas que garantizan la seguridad del paciente y
                            la eficiencia operativa del hospital.
                        </p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg border">
                        <h3 className="font-semibold mb-4 flex items-center">
                            <CheckCircle2 className="h-5 w-5 mr-2 text-[#00AEEF]" />
                            Resultados Clave
                        </h3>
                        <ul className="space-y-2 text-sm text-slate-600">
                            <li>• Cumplimiento normativo al 100%</li>
                            <li>• Entrega en tiempo y forma</li>
                            <li>• Capacitación al personal técnico incluida</li>
                        </ul>
                    </div>

                    <div className="mt-8">
                        <Button asChild size="lg" className="w-full sm:w-auto">
                            <Link href="/contacto">
                                Solicitar cotización similar
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
