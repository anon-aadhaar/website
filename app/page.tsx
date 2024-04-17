import { Banner } from "@/components/elements/Banner";
import { Icons } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";
import { EventSection } from "@/sections/homePage/EventSection";
import { FeatureSection } from "@/sections/homePage/FeatureSection";
import { ProjectSection } from "@/sections/homePage/ProjectsSection";
import { LABELS } from "@/shared/labels";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <PageHeader
        preTitle="ANON AADHAAR"
        title="ENSURING INDIVIDUAL PRIVACY"
        actions={
          <Link href="/">
            <Button icon={<Icons.ArrowRight />} className="uppercase">
              Try the demo
            </Button>
          </Link>
        }
      />
      <ProjectSection />
      <FeatureSection />
      <EventSection />
      <Banner
        title="Join the anon aadhaar community"
        actions={
          <Button
            variant="black"
            className="uppercase"
            icon={<Icons.Discord className="text-white" />}
            iconPosition="left"
          >
            {LABELS.COMMON.DISCORD}
          </Button>
        }
      />
    </main>
  );
}
