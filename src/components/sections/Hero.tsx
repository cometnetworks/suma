import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-20 text-white" style={{ backgroundColor: '#264D96' }}>
            {/* Background Overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#264D96] via-[#4A7BD0] to-[#264D96] opacity-90" />

            <div className="container relative z-10 flex flex-col items-center text-center">
                <h1 className="mb-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Soluciones Integrales en <span className="text-[#FFF200]">Gases Medicinales</span> e Infraestructura Hospitalaria
                </h1>
                <p className="mb-8 max-w-2xl text-lg text-slate-300 sm:text-xl">
                    Garantizamos la seguridad y eficiencia de su hospital con tecnología de vanguardia y cumplimiento normativo estricto.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                    <Button asChild size="lg" className="bg-[#4A7BD0] hover:bg-[#264D96] text-white border-none">
                        <Link href="/contacto">
                            Agendar Asesoría <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" className="bg-[#FFF200] hover:bg-[#E6D900] text-[#1E1E1E] border-none font-semibold">
                        <Link href="/proyectos">
                            Ver Proyectos
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
