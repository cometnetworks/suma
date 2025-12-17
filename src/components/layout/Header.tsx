"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ShinyButton } from "@/components/ui/ShinyButton";

export function Header() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = React.useState(false);

    // Lock body scroll when menu is open
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1]
            }
        }
    } as any;

    const navListVariants = {
        open: {
            transition: { staggerChildren: 0.07, delayChildren: 0.2 }
        },
        closed: {
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        }
    };

    const navItemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                y: { stiffness: 1000, velocity: -100 }
            }
        },
        closed: {
            y: 50,
            opacity: 0,
            transition: {
                y: { stiffness: 1000 }
            }
        }
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 flex h-16 items-center justify-between">
                <div className="flex items-center gap-2 z-50 relative">
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

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden z-50 relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsOpen(!isOpen)}
                            className="relative z-50 hover:bg-transparent"
                        >
                            {isOpen ? <X className="h-6 w-6 text-slate-900" /> : <Menu className="h-6 w-6" />}
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </div>

                    {/* Full Screen Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={menuVariants}
                                className="fixed inset-0 z-40 bg-white/80 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8"
                            >
                                <motion.nav
                                    variants={navListVariants}
                                    className="flex flex-col gap-6"
                                >
                                    {NAV_LINKS.map((link) => (
                                        <motion.div key={link.href} variants={navItemVariants}>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "text-3xl font-bold tracking-tight transition-colors hover:text-[#00AEEF]",
                                                    pathname === link.href
                                                        ? "text-[#264D96]"
                                                        : "text-slate-600"
                                                )}
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    ))}
                                    <motion.div variants={navItemVariants} className="mt-8">
                                        <ShinyButton href="/contacto" className="w-full justify-center text-lg py-6" onClick={() => setIsOpen(false)}>
                                            Agendar Asesoría
                                        </ShinyButton>
                                    </motion.div>
                                </motion.nav>

                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 -z-10 w-64 h-64 bg-[#00AEEF]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
                                <div className="absolute bottom-0 left-0 -z-10 w-80 h-80 bg-[#FFF200]/10 rounded-full blur-3xl opacity-50 pointer-events-none" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </header>
    );
}
