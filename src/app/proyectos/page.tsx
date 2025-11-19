"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MOCK_PROJECTS } from "@/lib/mock-data";
import { MapPin, Calendar, ArrowRight, Search } from "lucide-react";

const CATEGORIES = [
    { value: "all", label: "Todos" },
    { value: "Gases Medicinales", label: "Gases Medicinales" },
    { value: "Cortinas", label: "Cortinas Antibacterianas" },
    { value: "Correo Neumático", label: "Correo Neumático" },
    { value: "Infraestructura", label: "Infraestructura" },
    { value: "Mantenimiento", label: "Mantenimiento" },
    { value: "Mobiliario", label: "Mobiliario" },
];

export default function ProjectsPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");

    const filteredProjects = MOCK_PROJECTS.filter((project) => {
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            project.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === "all" || project.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Proyectos Realizados</h1>
                    <p className="text-muted-foreground mt-2">
                        Conoce nuestra experiencia en hospitales de todo México.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 bg-slate-50 p-4 rounded-lg">
                <div className="relative flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Buscar por nombre o ciudad..."
                        className="pl-8 bg-white"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                    <SelectTrigger className="w-full sm:w-[200px] bg-white">
                        <SelectValue placeholder="Categoría" />
                    </SelectTrigger>
                    <SelectContent>
                        {CATEGORIES.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                    <Card key={project.slug} className="overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
                        <div className="relative h-48 w-full">
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start mb-2">
                                <Badge variant="secondary" className="capitalize">
                                    {project.category}
                                </Badge>
                                <span className="text-xs text-muted-foreground flex items-center">
                                    <Calendar className="h-3 w-3 mr-1" /> {project.year}
                                </span>
                            </div>
                            <CardTitle className="line-clamp-1">{project.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-muted-foreground line-clamp-3">
                                {project.description}
                            </p>
                            <div className="mt-4 flex items-center text-xs text-muted-foreground">
                                <MapPin className="h-3 w-3 mr-1" /> {project.location}
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button asChild variant="ghost" className="w-full justify-between group">
                                <Link href={`/proyectos/${project.slug}`}>
                                    Ver Detalles
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground">No se encontraron proyectos con los filtros seleccionados.</p>
                    <Button
                        variant="link"
                        onClick={() => { setSearchTerm(""); setCategoryFilter("all"); }}
                    >
                        Limpiar filtros
                    </Button>
                </div>
            )}
        </div>
    );
}
