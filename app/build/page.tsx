import { PageHeader } from "@/components/PageHeader";
import { BuildDescriptionSection } from "@/sections/buildPage/BuildDescriptionSection";
import { ToolsSection } from "@/sections/buildPage/ToolsSection";
import { LABELS } from "@/shared/labels";
import React from "react";

const Illustration = () => {
  return (
    <>
      <div
        className="hidden right-0 top-0 ml-auto md:absolute md:-right-20 md:top-0 w-[330px] h-[330px] lg:w-[854px] md:h-[292px] md:w-[762px] lg:h-[507px] md:translate-x-40 lg:translate-x-32 xl:translate-x-5 bg-no-repeat"
        style={{
          backgroundImage: "url('illustrations/build-shape-big.svg')",
          backgroundPosition: "top right",
        }}
      />
      <div
        className="md:hidden -right-40 top-0 ml-auto h-[134px] w-[411px] bg-no-repeat"
        style={{
          backgroundImage: "url('illustrations/build-shape.svg')",
          backgroundPosition: "top right",
        }}
      ></div>
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
