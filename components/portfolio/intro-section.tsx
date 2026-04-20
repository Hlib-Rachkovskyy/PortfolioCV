"use client";

import { Button } from "@/components/ui/button";
import { Download, Copy } from "lucide-react";
import { toast } from "sonner";

export function IntroSection() {
  const copyEmail = () => {
    navigator.clipboard.writeText("hlibrachkovskyy@gmail.com");
    toast.success("Email copied to clipboard!");
  };

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center py-20">
      <div className="absolute -left-12 top-24 hidden lg:block">
        <span className="text-8xl font-sans text-primary/5 select-none">01</span>
      </div>
      
      <div className="space-y-12">
        <h1 className="text-6xl lg:text-8xl font-sans font-black leading-[0.85] tracking-tighter text-foreground">
          DESIGN.<br />
          DEVELOP.<br />
          <span className="text-primary">DELIVER.</span>
        </h1>

        <div className="max-w-xl space-y-6 text-lg leading-relaxed text-muted-foreground font-sans">
          <p>
            I am a <span className="text-foreground font-medium">Software Developer</span> specializing in 
            Databases and Cloud Architectures. I build high-integrity systems that 
            bridge the gap between academic research and industrial scale.
          </p>

          <p>
            Currently focused on <span className="text-primary font-medium underline decoration-primary/30 underline-offset-4">Full-Stack Engineering</span> using Java, React, and modern cloud primitives.
          </p>

          <div className="flex flex-wrap gap-6 pt-4">
            <Button asChild size="lg" className="h-12 px-8 bg-primary text-primary-foreground hover:scale-[1.02] transition-transform rounded-none font-sans uppercase tracking-widest text-xs">
              <a href="https://drive.google.com/file/d/127Qp10SKehf_8Szhh-JUKJvsTOAeygN0/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-3 h-4 w-4" />
                Get Resume
              </a>
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 border-muted-foreground/20 hover:border-primary hover:bg-transparent hover:text-primary transition-all rounded-none font-sans uppercase tracking-widest text-xs" onClick={copyEmail}>
              <Copy className="mr-3 h-4 w-4" />
              Copy Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
