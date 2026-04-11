import { Navigation, MobileNavigation } from "@/components/portfolio/navigation";
import { IntroSection } from "@/components/portfolio/intro-section";
import { ExperienceSection } from "@/components/portfolio/experience-section";
import { AcademicSection } from "@/components/portfolio/academic-section";
import { PublicationsSection } from "@/components/portfolio/publications-section";
import { PublicActivitySection } from "@/components/portfolio/public-activity-section";
import { ProjectSection } from "@/components/portfolio/project-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { Footer } from "@/components/portfolio/footer";
import {EducationSection} from "@/components/portfolio/education-section";
import { FadeInSection } from "@/components/ui/fade-in";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <MobileNavigation />

      <main className="lg:ml-64">
        <div className="mx-auto max-w-3xl px-6 py-12 lg:px-12">
          <FadeInSection>
            <IntroSection />
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <EducationSection />
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <ExperienceSection />
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <AcademicSection />
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <ProjectSection />
          </FadeInSection>
          
          <FadeInSection delay={100}>
            <ContactSection />
          </FadeInSection>
        </div>

        <Footer />
      </main>
    </div>
  );
}
