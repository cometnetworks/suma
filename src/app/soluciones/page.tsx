"use client";

import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SERVICES_DATA } from "@/lib/services-data";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

export default function SolucionesPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <Reveal yOffset={50}>
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold tracking-tight mb-4">Nuestras Soluciones</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Soluciones integrales para infraestructura hospitalaria con tecnología de vanguardia y cumplimiento normativo.
                    </p>
                </div>
            </Reveal>

            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible className="space-y-4">
                    {SERVICES_DATA.map((service, index) => (
                        <Reveal key={index} delay={0.1 + (index * 0.1)} width="100%">
                            <AccordionItem value={`item-${index}`} className="border-none">
                                <SpotlightCard className="overflow-hidden glass-card hover:border-[#00AEEF]/30 bg-white/50">
                                    <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-slate-50/50 transition-colors">
                                        <div className="flex items-center gap-4 text-left w-full">
                                            <div className="flex-shrink-0 h-12 w-12 bg-[#00AEEF]/10 rounded-lg flex items-center justify-center p-2">
                                                <Image
                                                    src={service.icon}
                                                    alt={service.title}
                                                    width={32}
                                                    height={32}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lg text-slate-900">{service.title}</h3>
                                                <p className="text-sm text-slate-600 mt-1">{service.description}</p>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-4">
                                        <div className="pt-4 border-t border-slate-100">
                                            <h4 className="font-semibold text-[#4A7BD0] mb-3">Detalles del Servicio</h4>
                                            <p className="text-slate-700 leading-relaxed">
                                                {service.details}
                                            </p>
                                            <div className="mt-4 flex gap-2">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#00AEEF]/10 text-[#00AEEF]">
                                                    Certificado
                                                </span>
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-700">
                                                    Soporte 24/7
                                                </span>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </SpotlightCard>
                            </AccordionItem>
                        </Reveal>
                    ))}
                </Accordion>
            </div>

            <Reveal delay={0.6} yOffset={30}>
                <div className="mt-16 text-center bg-slate-50 glass-panel rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-4">¿Necesitas una solución personalizada?</h2>
                    <p className="text-slate-600 mb-6 max-w-xl mx-auto">
                        Nuestro equipo técnico puede diseñar una solución a la medida de las necesidades de tu hospital.
                    </p>
                    <a
                        href="/contacto"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#4A7BD0] hover:bg-[#264D96] text-white rounded-lg font-medium transition-all hover:scale-105 shadow-lg"
                    >
                        Contactar a un Especialista
                    </a>
                </div>
            </Reveal>
        </div>
    );
}
