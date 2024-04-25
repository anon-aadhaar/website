"use client";

import { Banner } from "@/components/elements/Banner";
import { Icons } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Shapes } from "@/components/Shape";
import { Button } from "@/components/ui/Button";
import { LINKS } from "@/hooks/useSettings";
import { EventSection } from "@/sections/homePage/EventSection";
import { FeatureSection } from "@/sections/homePage/FeatureSection";
import { IntroSection } from "@/sections/homePage/IntroSection";
import { PainPointSection } from "@/sections/homePage/PainPointSection";
import { ProjectSection } from "@/sections/homePage/ProjectsSection";
import { LABELS } from "@/shared/labels";
import Link from "next/link";
import { motion } from "framer-motion";
import { AppContainer } from "@/components/AppContainer";
import { Label } from "@/components/ui/Label";
import { svgHoverAnimation } from "@/shared/utils";

export default function Home() {
  return (
    <main>
      <PageHeader
        preTitle={LABELS.HOME_PAGE.TITLE_LABEL}
        title={
          <div className="max-w-[340px] sm:max-w-[480px] lg:max-w-full w-full">
            {LABELS.HOME_PAGE.TITLE}
          </div>
        }
        containerClass="flex h-[560px] md:h-[645px]"
        actions={
          <Link href={LINKS.WEBSITE_DEMO} target="_blank">
            <Button icon={<Icons.ArrowRight />} className="uppercase">
              Try the demo
            </Button>
          </Link>
        }
      >
        <motion.div
          onMouseMove={svgHoverAnimation}
          aria-label="Homepage shapes"
        >
          <Shapes.Homepage
            className="absolute top-14 lg:top-0 right-0 w-[546px] h-[421px] sm:w-[546px] sm:h-[497px] md:w-[730px] md:h-[545px] xl:w-[900px] xl:h-[705px] translate-x-72 md:translate-x-48 lg:translate-x-20"
            id="homepage-svg"
          />
        </motion.div>
      </PageHeader>

      <IntroSection />
      <AppContainer className="pb-30 pt-16">
        <Label.Section className="uppercase md:text-center">
          Developers, dive into a new era of security and privacy in your
          applications effortlessly!
        </Label.Section>
      </AppContainer>
      <PainPointSection />
      <ProjectSection />
      <FeatureSection />
      <EventSection />
      <Banner
        title={LABELS.HOME_PAGE.BANNER.TITLE}
        actions={
          <Link href={LINKS.DISCORD} target="_blank">
            <Button
              variant="black"
              className="uppercase"
              icon={<Icons.Discord className="text-white" />}
              icon-position="left"
            >
              {LABELS.COMMON.DISCORD}
            </Button>
          </Link>
        }
      />
    </main>
  );
}
