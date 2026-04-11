"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AcademicItem {
  title: string;
  description: string;
  area: string;
  status: "ongoing" | "completed";
  link?: string;
}

const academicActivity: AcademicItem[] = [
  {
    title: "Engineering Thesis",
    description:
      "[Title Hidden until Defense] – Researching and implementing a Social Media type of system focused on the implementation of geographic information systems (GIS).",
    area: "Software Engineering & Database Systems",
    status: "completed",
    link: "https://example.com",
  },
];

export function AcademicSection() {
  return (
    <section id="academic" className="relative py-24 border-t border-border/40">
      <div className="absolute -left-12 top-24 hidden lg:block">
        <span className="text-8xl font-sans text-primary/5 select-none">04</span>
      </div>

      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-primary font-semibold">
          Academic Research
        </h2>
        <div className="h-px flex-1 bg-border/40" />
      </div>

      <div className="grid gap-px bg-border/40 border border-border/40">
        {academicActivity.map((project, index) => (
          <div
            key={index}
            className="group relative bg-background p-10 transition-all hover:bg-primary/[0.02]"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-6 max-w-xl">
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] uppercase tracking-widest text-primary font-bold">
                      {project.area}
                    </span>
                    <span className="h-px w-4 bg-border" />
                    <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-sans text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center h-12 w-12 border border-border/60 rounded-none text-muted-foreground hover:text-primary hover:border-primary transition-all group/link"
                >
                  <ArrowUpRight className="h-5 w-5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
