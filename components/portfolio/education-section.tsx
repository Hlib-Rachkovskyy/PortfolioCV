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
        period: "2022 - June 2026 (Expected)",
        title: "Bachelor of Science in Computer Science (Engineering)",
        company: "Polish-Japanese Academy of Information Technology (PJAIT)",
        description:
            "Currently pursuing a B.Sc. in Computer Science with a specialization in Software Engineering. My academic journey at PJAIT is centered on mastering the lifecycle of scalable systems - from low-level memory management and algorithmic efficiency to modern cloud-native architectures. I focus on bridging the gap between theoretical computer science and practical, robust engineering solutions.",
        technologies: ["Java", "C++", "SQL","Linux","Docker","Git","Bash","Design Patterns","Algorithms & Data Structures", "Relational Databases"],
    },

];

const INITIAL_COUNT = 4;

export function EducationSection() {
    const [showAll, setShowAll] = useState(false);

    const visibleExperiences = showAll ? education : education.slice(0, INITIAL_COUNT);
    const hasMore = education.length > INITIAL_COUNT;

    return (
        <section id="education" className="py-24">
            <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
                Education
            </h2>

            <div className="space-y-12">
                {visibleExperiences.map((exp, index) => (
                    <div key={index} className="group relative grid gap-4 md:grid-cols-8">
                        <div className="md:col-span-2">
                            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                                {exp.period}
                            </p>
                        </div>

                        <div className="md:col-span-6">
                            <h3 className="font-medium text-foreground">
                                {exp.title}
                            </h3>
                            <h3 className="font-medium text-foreground">
                                {exp.companyUrl ? (
                                    <a
                                        href={exp.companyUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-primary transition-colors hover:text-primary/80"
                                    >
                                        {exp.company}
                                        <ExternalLink className="h-3 w-3" />
                                    </a>
                                ) : (
                                    <span className="text-primary">{exp.company}</span>
                                )}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {exp.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {exp.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {hasMore && (
                <div className="mt-8 flex justify-center">
                    <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                        className="gap-2"
                    >
                        {showAll ? "Show Less" : "Load More"}
                        <ChevronDown className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`} />
                    </Button>
                </div>
            )}
        </section>
    );
}
