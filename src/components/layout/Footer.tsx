import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, CONTACT_INFO, SOCIAL_MEDIA } from "@/lib/constants";

export function Footer() {
    return (
        <footer className="border-t bg-muted/40">
            <div className="container mx-auto px-4 py-10 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/suma-logo.jpg"
                                alt="SUMA Hospitalario"
                                width={100}
                                height={35}
                                className="h-8 w-auto"
                            />
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Especialistas en instalación y gestión de gases medicinales y soluciones hospitalarias.
                        </p>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Navegación</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Link href={link.href} className="hover:text-foreground transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Contacto</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>{CONTACT_INFO.address}</li>
                            <li>
                                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-foreground transition-colors">
                                    {CONTACT_INFO.phone}
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-foreground transition-colors">
                                    {CONTACT_INFO.email}
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold">Síguenos</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href={SOCIAL_MEDIA.facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors flex items-center gap-2"
                                >
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href={SOCIAL_MEDIA.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-foreground transition-colors flex items-center gap-2"
                                >
                                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                    X (Twitter)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-10 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} SUMA Hospitalario. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
