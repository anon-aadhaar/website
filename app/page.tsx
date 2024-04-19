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

export default function Home() {
  return (
    <main>
      <PageHeader
        preTitle={LABELS.HOME_PAGE.TITLE_LABEL}
        title={LABELS.HOME_PAGE.TITLE}
        actions={
          <Link href={LINKS.WEBSITE_DEMO} target="_blank">
            <Button icon={<Icons.ArrowRight />} className="uppercase">
              Try the demo
            </Button>
          </Link>
        }
      >
        <motion.div
          onMouseMove={(e) => {
            const clientX = e?.clientX;
            const clientY = e?.clientY;

            const el = document
              .elementFromPoint(clientX, clientY)
              ?.closest("path");
            if (!el) return;

            const color = (el.attributes as any)?.stroke.value ?? "transparent";

            const startingColor = `#00${color.replace("#", "")}`;

            el.animate(
              {
                fill: [startingColor, color, startingColor],
              },
              {
                duration: 1500,
                iterations: 1,
                easing: "ease-in-out",
              }
            );
          }}
          aria-label="Homepage shapes"
          className="md:absolute top-0 right-0 w-[830px] h-[645px] translate-x-20 md:translate-x-52 lg:translate-x-10"
        >
          <Shapes.Homepage id="homepage-svg" />
        </motion.div>
      </PageHeader>
      <IntroSection />
      <PainPointSection />
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
            icon-position="left"
          >
            {LABELS.COMMON.DISCORD}
          </Button>
        }
      />
    </main>
  );
}
