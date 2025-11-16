import { ApproachSection } from "@/components/sections/approach";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import { CallToActionSection } from "@/components/sections/cta";
import { CaseStudiesPreview } from "@/components/sections/case-studies-preview";
import { HeroSection } from "@/components/sections/hero";
import { MetricsSection } from "@/components/sections/metrics";
import { ServicesSection } from "@/components/sections/services";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsSection />
      <ServicesSection />
      <CaseStudiesPreview />
      <ApproachSection />
      <BlogPreviewSection />
      <CallToActionSection />
    </>
  );
}
