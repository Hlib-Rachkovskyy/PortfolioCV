"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
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
      "[Title Hidden until Defense] – Researching and implementing " +
        "a Social Media type of system focused on the implementation of geographic information systems (GIS).",
    area: "Software Engineering and Database Systems",
    status: "completed",
    link: "https://example.com",
  },
];

const INITIAL_COUNT = 4;

export function AcademicSection() {
  const [showAll, setShowAll] = useState(false);
  
  const visibleProjects = showAll ? academicActivity : academicActivity.slice(0, INITIAL_COUNT);
  const hasMore = academicActivity.length > INITIAL_COUNT;

  return (
    <section id="academic" className="py-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Academic Activity
      </h2>

      <div className="space-y-8">
        {visibleProjects.map((project, index) => (
          <div
            key={index}
            className="group rounded-lg border border-border bg-card/50 p-6 transition-all hover:border-primary/50 hover:bg-card"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    {project.area}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                      project.status === "ongoing"
                        ? "bg-primary/20 text-primary"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {project.status === "ongoing" ? "Ongoing" : "Completed"}
                  </span>
                </div>

                <h3 className="font-medium text-foreground">{project.title}</h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={`View ${project.title} project`}
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              )}
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
