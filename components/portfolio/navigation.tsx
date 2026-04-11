"use client";

import { useState, useEffect } from "react";
import { Menu, X, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Academic Activity", href: "#academic" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-between border-r border-border bg-background p-10 lg:flex">
      {/* Technical Margin Anchor */}
      <div className="absolute right-0 top-0 h-full w-px bg-border">
        <div className="absolute top-[10%] right-[-4px] h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
        <div className="absolute top-[90%] right-[-4px] h-2 w-2 rounded-full bg-border" />
      </div>

      <div className="space-y-12">
        <div className="space-y-2">
          <h1 className="text-4xl font-sans font-bold leading-tight text-foreground tracking-tighter">
            Hlib <br /> Rachkovskyy
          </h1>
          <div className="h-px w-12 bg-primary" />
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Software Engineer
          </p>
        </div>

        <ul className="space-y-4">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <li key={item.href}>
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`group relative flex items-center text-xs uppercase tracking-[0.2em] transition-all ${
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <span className={`mr-4 h-[1px] transition-all duration-300 ${
                    isActive ? "w-8 bg-primary" : "w-0 bg-muted-foreground group-hover:w-4"
                  }`} />
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="space-y-8">
        <div className="flex gap-5">
          <a href="https://github.com/Hlib-Rachkovskyy" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/hlib-rachkovskyy/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="mailto:hlibrachkovskyy@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail size={18} />
          </a>
        </div>
        
        <Button asChild variant="outline" className="w-full border-muted-foreground/20 hover:border-primary hover:bg-primary/5 hover:text-primary transition-all rounded-none font-sans text-xs uppercase tracking-widest">
          <a href="/Hlib_Rachkovskyy_CV.pdf" target="_blank">
            <Download className="mr-2 h-3 w-3" />
            Download CV
          </a>
        </Button>
      </div>
    </nav>
  );
}

export function MobileNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-border bg-background/80 px-6 py-4 backdrop-blur-md lg:hidden">
        <h1 className="font-sans text-xl">H. Rachkovskyy</h1>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center gap-8 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-6"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={32} />
          </Button>
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className="font-sans text-4xl hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
