"use client";

import { Button } from "@/components/ui/button";
import { Download, Copy, Mail } from "lucide-react";
import { toast } from "sonner";

export function IntroSection() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hlibrachkovskyy@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
      <section id="about" className="min-h-[70vh] py-24 flex flex-col justify-center">
        <div className="space-y-6 text-lg">
            <p className="leading-relaxed text-muted-foreground">
                Welcome! I'm a {" "}
                <span className="font-medium text-foreground">
                    Software Developer
                </span>{" "}
                with a major in{" "}
                <span className="font-medium text-foreground">
                Databases
                </span>
                .
                While I officially graduate in{" "}
                    <span className="font-medium text-foreground">
                2026
                </span>
                , I have
                already completed my core coursework and am fully ready for the industry. My primary focus is on{" "}
                    <span className="font-medium text-primary">
                    full-stack engineering
                </span>{" and "}
                    <span className="font-medium text-primary">
      cloud computing
    </span>.
            </p>

            <p className="leading-relaxed text-muted-foreground">
            I thrive across the entire software lifecycle-from engineering scalable web apps to leading complex projects
            using{" "}
            <span className="font-medium text-foreground">
      Java
    </span>{" and "}
            <span className="font-medium text-foreground">
      React
    </span>.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild size="lg" className="h-12 px-8">
              <a href="/Hlib_Rachkovskyy_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8" onClick={copyEmail}>
              <Copy className="mr-2 h-5 w-5" />
              Copy Email
            </Button>
          </div>
        </div>
      </section>
  );
}
