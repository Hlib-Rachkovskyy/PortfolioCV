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

const INITIAL_COUNT = 4;

export function ExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  
  const visibleExperiences = showAll ? experiences : experiences.slice(0, INITIAL_COUNT);
  const hasMore = experiences.length > INITIAL_COUNT;

  return (
    <section id="experience" className="py-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Experience
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
                {exp.title} ·{" "}
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
