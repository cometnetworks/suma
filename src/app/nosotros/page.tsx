import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function NosotrosPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 text-white overflow-hidden" style={{ backgroundColor: '#264D96' }}>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
                            Expertos en Seguridad Hospitalaria y Gases Medicinales
                        </h1>
                        <p className="text-xl text-slate-200 mb-8">
                            En SUMA Hospitalario, nos dedicamos a salvar vidas a través de infraestructura segura, certificada y eficiente.
                        </p>
                    </div>
                </div>
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#264D96] via-[#4A7BD0] to-[#264D96] opacity-20" />
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Nuestra Misión</h2>
                            <p className="text-lg text-slate-600 mb-6">
                                Proveer soluciones integrales en gases medicinales e infraestructura hospitalaria que garanticen la seguridad del paciente y el cumplimiento normativo, mediante tecnología de vanguardia y un servicio técnico especializado.
                            </p>
                            <div className="space-y-4">
                                {[
                                    "Certificación bajo normas nacionales e internacionales.",
                                    "Personal técnico altamente capacitado.",
                                    "Tecnología de punta en monitoreo y control.",
                                    "Atención personalizada y respuesta rápida."
                                ].map((item, index) => (
                                    <div key={index} className="flex items-start">
                                        <CheckCircle2 className="h-6 w-6 text-[#00AEEF] mr-3 shrink-0" />
                                        <span className="text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/nosotros.jpg"
                                alt="Ingeniero revisando equipos médicos"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values / Stats */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {[
                            { value: "+15", label: "Años de Experiencia" },
                            { value: "+50", label: "Hospitales Atendidos" },
                            { value: "100%", label: "Cumplimiento Normativo" },
                            { value: "24/7", label: "Soporte Técnico" },
                        ].map((stat, index) => (
                            <div key={index} className="p-6 bg-white rounded-xl shadow-sm">
                                <div className="text-4xl font-bold text-[#4A7BD0] mb-2">{stat.value}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">
                        ¿Listo para optimizar su infraestructura hospitalaria?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                        Contáctenos hoy mismo para una evaluación técnica sin compromiso.
                    </p>
                    <Button asChild size="lg" className="bg-[#4A7BD0] hover:bg-[#264D96]">
                        <Link href="/contacto">
                            Contactar Ahora
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}
