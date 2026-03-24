"use client";

import { useEffect, useState } from "react";
import { Eye } from "lucide-react";

export function Footer() {
  const [visitCount, setVisitCount] = useState<number | null>(null);

  useEffect(() => {
    // Get stored count or initialize
    const storedCount = localStorage.getItem("portfolio-visit-count");
    const hasVisitedThisSession = sessionStorage.getItem("portfolio-visited");

    let count = storedCount ? parseInt(storedCount, 10) : 0;

    // Only increment if this is a new session
    if (!hasVisitedThisSession) {
      count += 1;
      localStorage.setItem("portfolio-visit-count", count.toString());
      sessionStorage.setItem("portfolio-visited", "true");
    }

    setVisitCount(count);
  }, []);

  return (
    <footer className="border-t border-border bg-card/50 py-8">
      <div className="mx-auto max-w-3xl px-6 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>

          <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2">
            <Eye className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              {visitCount !== null ? (
                <>
                  <span className="font-medium text-foreground">
                    {new Intl.NumberFormat("en-US").format(visitCount)}
                  </span>{" "}
                  {visitCount === 1 ? "visit" : "visits"}
                </>
              ) : (
                <span className="inline-block w-12 animate-pulse rounded bg-muted">
                  &nbsp;
                </span>
              )}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
