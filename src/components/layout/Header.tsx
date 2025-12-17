"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { ShinyButton } from "@/components/ui/ShinyButton";

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center gap-2">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/suma-logo.jpg"
                            alt="SUMA Hospitalario"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors hover:text-primary",
                                pathname === link.href
                                    ? "text-foreground"
                                    : "text-muted-foreground"
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <div className="hidden md:flex">
                        <Button asChild variant="default">
                            <Link href="/contacto">
                                <Phone className="mr-2 h-4 w-4" />
                                Agendar Asesoría
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Nav */}
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="icon" className="hover:bg-transparent">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-white/20 bg-white/80 backdrop-blur-xl">
                            <div className="flex flex-col h-full mt-6">
                                <Link href="/" className="flex items-center mb-8" onClick={() => setIsOpen(false)}>
                                    <Image
                                        src="/suma-logo.jpg"
                                        alt="SUMA Hospitalario"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </Link>
                                <nav className="flex flex-col gap-6">
                                    {NAV_LINKS.map((link) => (
                                        <Link
                                            key={link.href}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "text-lg font-medium transition-colors hover:text-[#00AEEF]",
                                                pathname === link.href
                                                    ? "text-[#264D96] font-semibold"
                                                    : "text-slate-600"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    ))}
                                    <div className="mt-4">
                                        <ShinyButton href="/contacto" className="w-full justify-center" onClick={() => setIsOpen(false)}>
                                            Agendar Asesoría
                                        </ShinyButton>
                                    </div>
                                </nav>

                                {/* Decor / Footer info could go here */}
                                <div className="mt-auto">
                                    <p className="text-xs text-slate-400 text-center">
                                        © 2024 SUMA Hospitalario
                                    </p>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
