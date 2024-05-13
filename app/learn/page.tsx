"use client";

import { AppContainer } from "@/components/AppContainer";
import { Icons } from "@/components/Icons";
import { Accordion } from "@/components/ui/Accordion";
import { Label } from "@/components/ui/Label";
import { BlogSection } from "@/sections/learnPage/BlogSection";
import { WorkflowSection } from "@/sections/learnPage/WorkflowSection";
import { LABELS } from "@/shared/labels";
import React from "react";
import { svgHoverAnimation } from "@/shared/utils";
import { motion } from "framer-motion";
import { Shapes } from "@/components/Shape";

const Illustration = () => {
  return (
    <motion.div onMouseMove={svgHoverAnimation} aria-label="learn shapes">
      <Shapes.LearnPage className="z-10 -translate-x-1/2 md:translate-x-0 md:w-full h-[375px] md:h-[470px] bg-[length:auto_375px] md:bg-[length:auto_470px] bg-repeat-x" />
    </motion.div>
  );
};

export default function LearnPage() {
  return (
    <main>
      <div className="flex justify-center text-center pb-14 pt-16 md:pt-32 lg:pt-56">
        <Label.Title className="uppercase">
          {LABELS.LEARN_PAGE.TITLE}
        </Label.Title>
      </div>
      <div className="flex flex-col gap-14 md:pb-14">
        <Illustration />
        <WorkflowSection />
      </div>

      <div className="flex flex-col">
        <AppContainer className="flex justify-center py-10">
          <Label.Subtitle className="font-medium text-anon uppercase text-center">
            {LABELS.LEARN_PAGE.DESCRIPTION}
          </Label.Subtitle>
        </AppContainer>
        <div className="flex flex-col">
          <Accordion
            label={LABELS.LEARN_PAGE.STEPS.FIRST.TITLE}
            description={LABELS.LEARN_PAGE.STEPS.FIRST.DESCRIPTION}
            items={LABELS.LEARN_PAGE.STEPS.FIRST.ITEMS}
          />
          <div className="flex justify-center bg-white py-5">
            <Icons.Logo color="#071631" size={90} />
          </div>
          <Accordion
            label={LABELS.LEARN_PAGE.STEPS.SECOND.TITLE}
            description={LABELS.LEARN_PAGE.STEPS.SECOND.DESCRIPTION}
            variant="green"
            items={LABELS.LEARN_PAGE.STEPS.SECOND.ITEMS}
          />
        </div>
      </div>
      <BlogSection />
    </main>
  );
}
