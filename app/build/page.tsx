"use client";

import { PageHeader } from "@/components/PageHeader";
import { BuildDescriptionSection } from "@/sections/buildPage/BuildDescriptionSection";
import { ToolsSection } from "@/sections/buildPage/ToolsSection";
import { LABELS } from "@/shared/labels";
import React from "react";
import { motion } from "framer-motion";
import { svgHoverAnimation } from "@/shared/utils";
import { Shapes } from "@/components/Shape";

const Illustration = () => {
  return (
    <>
      {/* desktop illustration with animation effect */}
      <motion.div
        onMouseMove={svgHoverAnimation}
        aria-label="illustration build"
        className="z-10 hidden right-0 top-0 ml-auto md:flex md:absolute md:-right-20 md:top-20 w-[330px] h-[330px] lg:w-[854px] md:h-[292px] md:w-[762px] lg:h-[507px] md:translate-x-40 lg:translate-x-32 xl:translate-x-5 bg-no-repeat bd-red-400"
      >
        <Shapes.BuildPage className="inset-0" />
      </motion.div>

      <motion.div
        onMouseMove={svgHoverAnimation}
        aria-label="illustration build small"
        className="z-10 md:hidden translate-x-[60px] md:translate-x-0 -right-40 top-0 ml-auto h-[134px] w-[411px] bg-no-repeat"
      >
        <Shapes.BuildPageSmall />
      </motion.div>
    </>
  );
};

export default function BuildPage() {
  return (
    <main>
      <PageHeader
        title={LABELS.BUILD_PAGE.TITLE}
        description={LABELS.BUILD_PAGE.DESCRIPTION}
        containerClass="flex flex-col-reverse"
      >
        <Illustration />
      </PageHeader>
      <ToolsSection />
      <BuildDescriptionSection />
    </main>
  );
}
