"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EducationItems {
    period: string;
    title: string;
    company: string;
    companyUrl?: string;
    description: string;
    technologies: string[];
}
const education: EducationItems[] = [
    {
        period: "2022 - 2026 (Expected)",
        title: "B.Sc. in Computer Science",
        company: "Polish-Japanese Academy of Information Technology",
        description:
            "Pursuing a degree with a focus on Software Engineering and Database Systems. My academic journey is centered on mastering the lifecycle of scalable systems - from low-level memory management to modern cloud-native architectures.",
        technologies: ["Java", "C++", "SQL", "Docker", "Linux", "Design Patterns", "Data Structures"],
    },
];

export function EducationSection() {
    return (
        <section id="education" className="py-24 border-t border-border/40">
            <div className="flex items-center gap-4 mb-16">
                <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-primary font-semibold">
                    Education
                </h2>
                <div className="h-px flex-1 bg-border/40" />
            </div>

            <div className="space-y-20">
                {education.map((exp, index) => (
                    <div key={index} className="grid gap-8 md:grid-cols-12 group">
                        <div className="md:col-span-3">
                            <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground/60 group-hover:text-primary transition-colors">
                                {exp.period}
                            </p>
                        </div>

                        <div className="md:col-span-9 space-y-4">
                            <div className="space-y-1">
                                <h3 className="text-3xl font-sans text-foreground leading-tight">
                                    {exp.title}
                                </h3>
                                <p className="text-lg font-sans text-muted-foreground">
                                    {exp.company}
                                </p>
                            </div>

                            <p className="text-muted-foreground leading-relaxed max-w-2xl">
                                {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium flex items-center gap-2"
                                    >
                                        <span className="h-1 w-1 bg-primary rounded-full" />
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
