"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  period: string;
  title: string;
  company: string;
  companyUrl?: string;
  description: string;
  technologies: string[];
}
const experiences: ExperienceItem[] = [
  {
    period: "2022 — Present",
    title: "Independent Student Mentor",
    company: "Self-Employed",
    description:
        "Empowering aspiring developers by providing structured mentorship in backend architecture and database design. I simplify complex concepts like relational mapping and object-oriented programming to help students bridge the gap between academic theory and industry standards.",
    technologies: ["Java", "SQL", "Database Design", "Relational Databases"],
  },
  {
    period: "2024 — Present",
    title: "Software Engineer",
    company: "Freelance",
    companyUrl: "https://example.com",
    description:
        "Engineering custom digital solutions for diverse clients, ranging from responsive web applications to complex automation scripts. I focus on optimizing business workflows for non-technical industries, significantly reducing manual overhead through robust, scalable code.",
    technologies: ["TypeScript", "JavaScript", "Python", "Automation"],
  }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 border-t border-border/40">
      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-primary font-semibold">
          Experience
        </h2>
        <div className="h-px flex-1 bg-border/40" />
      </div>

      <div className="space-y-20">
        {experiences.map((exp, index) => (
          <div key={index} className="grid gap-8 md:grid-cols-12 group">
            <div className="md:col-span-3">
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground/60 group-hover:text-primary transition-colors">
                {exp.period}
              </p>
            </div>

            <div className="md:col-span-9 space-y-4">
              <div className="space-y-1">
                <h3 className="text-3xl font-serif text-foreground leading-tight">
                  {exp.title}
                </h3>
                <div className="flex items-center gap-2">
                    {exp.companyUrl ? (
                        <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-serif italic text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                        >
                            {exp.company}
                            <ExternalLink size={14} />
                        </a>
                    ) : (
                        <p className="text-lg font-serif italic text-muted-foreground">
                            {exp.company}
                        </p>
                    )}
                </div>
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
