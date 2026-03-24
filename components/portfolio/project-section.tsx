"use client";

import { useState } from "react";
import { ExternalLink, Star, GitFork, ChevronDown } from "lucide-react";
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
    title: "Disease prediction website",
    description:
      "Engineered a predictive web application that leverages machine learning models to identify potential health risks based on user-inputted symptoms and medical history.",
    technologies: ["Python", "Flask", "React", "Scikit-learn"],
    link: "https://github.com/Hlib-Rachkovskyy/Disease-prediction-website",
    stars: 0,
    forks: 0,
  },
  {
    title: "Personal website",
    description:
        "Designed and developed a high-performance, responsive digital hub to showcase my freelance engineering projects and academic activity.",
    technologies: ["React", "Tailwind", "Typescript"],
    link: "https://github.com/Hlib-Rachkovskyy/PortfolioCV",
    stars: 0,
    forks: 0,
  }
];

const INITIAL_COUNT = 6;

export function ProjectSection() {
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? otherProjects : otherProjects.slice(0, INITIAL_COUNT);
  const hasMore = otherProjects.length > INITIAL_COUNT;

  return (
    <section id="projects" className="py-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Projects
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg border border-border bg-card/50 p-5 transition-all hover:border-primary/50 hover:bg-card"
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-medium text-foreground group-hover:text-primary">
                {project.title}
              </h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              )}
            </div>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {project.stars !== undefined && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Star className="h-3 w-3" />
                  {new Intl.NumberFormat("en-US").format(project.stars)}
                </span>
              )}
              {project.forks !== undefined && (
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <GitFork className="h-3 w-3" />
                  {new Intl.NumberFormat("en-US").format(project.forks)}
                </span>
              )}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
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
