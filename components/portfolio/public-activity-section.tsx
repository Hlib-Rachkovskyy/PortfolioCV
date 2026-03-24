"use client";

import { useState } from "react";
import { ExternalLink, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PublicActivityItem {
  date: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
}

const publicActivities: PublicActivityItem[] = [
  {
    date: "None",
    title: "None",
    description:
      "None",
    url: "None",
    tags: ["None", "None", "None", "None"],
  }
];

const INITIAL_COUNT = 4;

export function PublicActivitySection() {
  const [showAll, setShowAll] = useState(false);
  
  const visibleActivities = showAll ? publicActivities : publicActivities.slice(0, INITIAL_COUNT);
  const hasMore = publicActivities.length > INITIAL_COUNT;

  return (
    <section id="public-activity" className="py-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-foreground">
        Public Activity
      </h2>

      <div className="space-y-12">
        {visibleActivities.map((activity, index) => (
          <div key={index} className="group relative grid gap-4 md:grid-cols-8">
            <div className="md:col-span-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {activity.date}
              </p>
            </div>

            <div className="md:col-span-6">
              <h3 className="font-medium text-foreground">
                <a
                  href={activity.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-primary"
                >
                  {activity.title}
                  <ExternalLink className="h-4 w-4 text-primary" />
                </a>
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {activity.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {activity.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {tag}
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
