import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/lib/services-data";

export function Services() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                        Nuestras Soluciones
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Ofrecemos un portafolio completo de servicios especializados para el sector salud.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 mb-12">
                    {SERVICES_DATA.map((service) => (
                        <Card key={service.title} className="border-none shadow-md hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[#00AEEF]/10 p-3">
                                    <Image
                                        src={service.icon}
                                        alt={service.title}
                                        width={48}
                                        height={48}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-sm">
                                    {service.description}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Button asChild size="lg" className="bg-[#4A7BD0] hover:bg-[#264D96]">
                        <Link href="/soluciones">
                            Ver Todas las Soluciones
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
