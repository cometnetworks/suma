import Image from "next/image";
import Link from "next/link";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SERVICES_DATA } from "@/lib/services-data";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export function Services() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <Reveal yOffset={50}>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-slate-900">
                            Nuestras Soluciones
                        </h2>
                        <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                            Ofrecemos un portafolio completo de servicios especializados para el sector salud.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-12 justify-center auto-rows-fr">
                    {SERVICES_DATA.map((service, index) => (
                        <Reveal key={service.title} delay={0.2 + (index * 0.1)} yOffset={30} className="h-full" width="100%">
                            <SpotlightCard className="h-full bg-white border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group rounded-xl">
                                <CardHeader>
                                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-[#00AEEF]/10 p-3 group-hover:bg-[#00AEEF]/20 transition-colors">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={48}
                                            height={48}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <CardTitle className="text-lg group-hover:text-[#00AEEF] transition-colors">{service.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-sm">
                                        {service.description}
                                    </CardDescription>
                                </CardContent>
                            </SpotlightCard>
                        </Reveal>
                    ))}
                </div>

                <Reveal delay={0.8}>
                    <div className="text-center">
                        <Button asChild size="lg" className="bg-[#4A7BD0] hover:bg-[#264D96] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                            <Link href="/soluciones">
                                Ver Todas las Soluciones
                            </Link>
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
