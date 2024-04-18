"use client";

import { AppContainer } from "@/components/AppContainer";
import { Banner } from "@/components/elements/Banner";
import { Icons } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Shapes } from "@/components/Shape";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { LINKS } from "@/hooks/useSettings";
import { EventSection } from "@/sections/homePage/EventSection";
import { FeatureSection } from "@/sections/homePage/FeatureSection";
import { IntroSection } from "@/sections/homePage/IntroSection";
import { PointSection } from "@/sections/homePage/PointSection";
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
          <Link href={LINKS.WEBSITE_DEMO} target="_blank">
            <Button icon={<Icons.ArrowRight />} className="uppercase">
              Try the demo
            </Button>
          </Link>
        }
      >
        <div
          aria-label="Homepage shapes"
          className="md:absolute top-0 right-0 w-[830px] h-[645px] translate-x-20 md:translate-x-52 lg:translate-x-10"
        >
          <Shapes.Homepage id="homepage-svg" />
        </div>
      </PageHeader>
      <IntroSection />
      <PointSection />
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
