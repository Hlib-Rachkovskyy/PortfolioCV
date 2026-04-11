"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
}

export function FadeInSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 700,
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Once visible, we can stop observing if we only want it to fade in once
            if (domRef.current) {
              observer.unobserve(domRef.current);
            }
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getDirectionClasses = () => {
    switch (direction) {
      case "up": return "translate-y-8";
      case "down": return "-translate-y-8";
      case "left": return "translate-x-8";
      case "right": return "-translate-x-8";
      default: return "translate-y-8";
    }
  };

  return (
    <div
      ref={domRef}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      className={cn(
        "transition-all ease-out",
        isVisible 
          ? "opacity-100 translate-x-0 translate-y-0" 
          : cn("opacity-0", getDirectionClasses()),
        className
      )}
    >
      {children}
    </div>
  );
}
