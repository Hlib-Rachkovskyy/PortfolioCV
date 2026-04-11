"use client";

import { useState } from "react";
import { ExternalLink, Star, GitFork, ChevronDown, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface OtherProject {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  stars?: number;
  forks?: number;
}

const otherProjects: OtherProject[] = [
  {
    title: "Disease Prediction Engine",
    description:
      "A predictive web application leveraging machine learning models to identify health risks based on symptomatic data.",
    technologies: ["Python", "Flask", "React", "Scikit-learn"],
    link: "https://github.com/Hlib-Rachkovskyy/Disease-prediction-website",
  },
  {
    title: "Architectural Portfolio",
    description:
        "High-performance digital hub designed to showcase freelance engineering projects and academic research.",
    technologies: ["Next.js", "Tailwind", "Typescript"],
    link: "https://github.com/Hlib-Rachkovskyy/PortfolioCV",
  }
];

export function ProjectSection() {
  return (
    <section id="projects" className="relative py-24 border-t border-border/40">
      <div className="absolute -left-12 top-24 hidden lg:block">
        <span className="text-8xl font-sans text-primary/5 select-none">05</span>
      </div>

      <div className="flex items-center gap-4 mb-16">
        <h2 className="text-xs font-sans uppercase tracking-[0.3em] text-primary font-semibold">
          Selected Projects
        </h2>
        <div className="h-px flex-1 bg-border/40" />
      </div>

      <div className="grid gap-px bg-border/40 border border-border/40">
        {otherProjects.map((project, index) => (
          <div
            key={index}
            className="group relative bg-background p-10 transition-all hover:bg-primary/[0.02]"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
              <div className="space-y-6 max-w-xl">
                <div className="space-y-2">
                  <h3 className="text-3xl font-sans text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-x-6 gap-y-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-widest text-muted-foreground/60 font-medium flex items-center gap-2"
                      >
                        <span className="h-1 w-1 bg-primary/40 rounded-full" />
                        {tech}
                      </span>
                    ))}
                  </div>
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
