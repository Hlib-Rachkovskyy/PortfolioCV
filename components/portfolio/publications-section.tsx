"use client";

import { useState } from "react";
import { ExternalLink, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  paperUrl?: string;
  codeUrl?: string;
}

const publications: Publication[] = [
  {
    title: "Engineering thesis done at PJAIT",
    authors: "Hlib Rachkovskyy",
    venue: "Would be revealed after defense.",
    year: "2026",
    paperUrl: "https://example.com",
    codeUrl: "https://example.com",
  }
];

const INITIAL_COUNT = 5;

export function PublicationsSection() {
  const [showAll, setShowAll] = useState(false);
  
  const visiblePublications = showAll ? publications : publications.slice(0, INITIAL_COUNT);
  const hasMore = publications.length > INITIAL_COUNT;

  return (
    <section id="publications" className="py-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Publications
      </h2>

      <div className="space-y-6">
        {visiblePublications.map((pub, index) => (
          <div
            key={index}
            className="group border-l-2 border-border py-4 pl-6 transition-colors hover:border-primary"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-medium leading-tight text-foreground group-hover:text-primary">
                  {pub.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {pub.authors}
                </p>

                <p className="mt-1 text-sm">
                  <span className="text-primary">{pub.venue}</span>
                  <span className="text-muted-foreground"> · {pub.year}</span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                {pub.paperUrl && (
                  <a
                    href={pub.paperUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={`Read paper: ${pub.title}`}
                  >
                    <FileText className="h-3 w-3" />
                    Paper
                  </a>
                )}
                {pub.codeUrl && (
                  <a
                    href={pub.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                    aria-label={`View code for: ${pub.title}`}
                  >
                    <ExternalLink className="h-3 w-3" />
                    Code
                  </a>
                )}
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
