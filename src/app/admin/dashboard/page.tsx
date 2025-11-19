import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, MessageSquare, TrendingUp } from "lucide-react";

const MOCK_LEADS = [
    { id: 1, name: "Dr. Juan Pérez", email: "juan.perez@hospital.com", status: "Nuevo", date: "2024-03-10" },
    { id: 2, name: "Ing. María López", email: "mlopez@clinica.mx", status: "Contactado", date: "2024-03-09" },
    { id: 3, name: "Lic. Carlos Ruiz", email: "cruiz@medica.com", status: "Cita Agendada", date: "2024-03-08" },
];

const MOCK_APPOINTMENTS = [
    { id: 1, lead: "Lic. Carlos Ruiz", type: "Consultoría Técnica", date: "2024-03-15 10:00 AM", status: "Confirmada" },
    { id: 2, lead: "Dra. Ana Silva", type: "Ventas", date: "2024-03-16 11:00 AM", status: "Pendiente" },
];

export default function DashboardPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Dashboard (Mock)</h1>

            {/* Stats */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
                        <Users className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+124</div>
                        <p className="text-xs text-muted-foreground">+20.1% mes pasado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Citas Agendadas</CardTitle>
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+12</div>
                        <p className="text-xs text-muted-foreground">+15% mes pasado</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Chats Activos</CardTitle>
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">+5</div>
                        <p className="text-xs text-muted-foreground">2 esperando respuesta</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Tasa Conversión</CardTitle>
                        <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">4.5%</div>
                        <p className="text-xs text-muted-foreground">+1.2% mes pasado</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Leads */}
                <Card>
                    <CardHeader>
                        <CardTitle>Leads Recientes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Nombre</TableHead>
                                    <TableHead>Estado</TableHead>
                                    <TableHead className="text-right">Fecha</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {MOCK_LEADS.map((lead) => (
                                    <TableRow key={lead.id}>
                                        <TableCell className="font-medium">
                                            <div>{lead.name}</div>
                                            <div className="text-xs text-muted-foreground">{lead.email}</div>
                                        </TableCell>
                                        <TableCell>
                                            <Badge variant={lead.status === "Nuevo" ? "default" : "secondary"}>
                                                {lead.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right">{lead.date}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Upcoming Appointments */}
                <Card>
                    <CardHeader>
                        <CardTitle>Próximas Citas</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Lead</TableHead>
                                    <TableHead>Tipo</TableHead>
                                    <TableHead className="text-right">Fecha</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {MOCK_APPOINTMENTS.map((app) => (
                                    <TableRow key={app.id}>
                                        <TableCell className="font-medium">{app.lead}</TableCell>
                                        <TableCell>{app.type}</TableCell>
                                        <TableCell className="text-right">
                                            <div className="flex flex-col items-end">
                                                <span>{app.date}</span>
                                                <Badge variant="outline" className="mt-1 text-xs">{app.status}</Badge>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
