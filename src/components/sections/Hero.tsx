import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { ShinyButton } from "@/components/ui/ShinyButton";
import Image from "next/image";
import { PARTNERS } from "@/lib/partners";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20 text-white" style={{ backgroundColor: '#264D96' }}>
            {/* Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 h-full w-full object-cover"
            >
                <source src="https://res.cloudinary.com/dzhupgoxk/video/upload/v1765932383/suma-video1_ymunjj.mp4" type="video/mp4" />
            </video>

            {/* Overlay for contrast */}
            <div className="absolute inset-0 z-0 bg-blue-900/80" />

            <div className="container relative z-10 flex flex-col items-center text-center">
                <Reveal yOffset={50}>
                    <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        Soluciones Integrales en <span className="text-[#FFF200]">Gases Medicinales</span> e Infraestructura Hospitalaria
                    </h1>
                </Reveal>

                <Reveal delay={0.4} yOffset={30}>
                    <p className="mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
                        Garantizamos la seguridad y eficiencia de su hospital con tecnología de vanguardia y cumplimiento normativo estricto.
                    </p>
                </Reveal>

                <Reveal delay={0.6} yOffset={20}>
                    <div className="flex flex-col gap-4 sm:flex-row items-center justify-center">
                        <ShinyButton href="/contacto" className="min-w-[200px]">
                            Agendar Asesoría
                        </ShinyButton>
                        <Button asChild size="lg" className="bg-[#FFF200] hover:bg-[#E6D900] text-[#1E1E1E] border-none font-semibold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-w-[200px] py-6 h-auto">
                            <Link href="/proyectos">
                                Ver Proyectos
                            </Link>
                        </Button>
                    </div>
                </Reveal>

                <div className="mt-16 w-full max-w-5xl">
                    <Marquee pauseOnHover className="[--duration:40s]">
                        {/* Partner Logos */}
                        {PARTNERS.map((partner) => (
                            <div key={partner.name} className="mx-6 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110">
                                <div className="relative h-12 w-32">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                            </div>
                        ))}
                    </Marquee>
                    <div className="mt-2 text-xs text-white/50 uppercase tracking-widest text-center">
                        Instituciones que confían en nosotros
                    </div>
                </div>
            </div>
        </section>
    );
}
