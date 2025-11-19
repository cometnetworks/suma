import { CalendlyWidget } from "@/components/ui/calendly-widget";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO } from "@/lib/constants";

export default function ContactPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold tracking-tight mb-4">Contáctanos</h1>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Estamos listos para asesorarte en tus proyectos de infraestructura hospitalaria.
                    Agenda una cita o envíanos un mensaje.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Contact Info */}
                <div className="lg:col-span-1 space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Información de Contacto</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-start">
                                <MapPin className="h-5 w-5 text-[#00AEEF] mr-3 mt-1" />
                                <div>
                                    <p className="font-medium">Dirección</p>
                                    <p className="text-sm text-muted-foreground">{CONTACT_INFO.address}</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="h-5 w-5 text-[#00AEEF] mr-3 mt-1" />
                                <div>
                                    <p className="font-medium">Teléfono</p>
                                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-sm text-muted-foreground hover:text-primary">
                                        {CONTACT_INFO.phone}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="h-5 w-5 text-[#00AEEF] mr-3 mt-1" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-sm text-muted-foreground hover:text-primary">
                                        {CONTACT_INFO.email}
                                    </a>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Horario de Atención</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                                <li className="flex justify-between">
                                    <span>Lunes - Viernes</span>
                                    <span>9:00 AM - 6:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Sábado</span>
                                    <span>9:00 AM - 2:00 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Domingo</span>
                                    <span>Cerrado</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                {/* Calendly Widget */}
                <div className="lg:col-span-2">
                    <Card className="h-full">
                        <CardHeader>
                            <CardTitle>Agenda una Asesoría</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CalendlyWidget />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
