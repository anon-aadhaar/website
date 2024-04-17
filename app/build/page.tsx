import { AlertBanner } from "@/components/AlertBanner";
import { AppContainer } from "@/components/AppContainer";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/Card";
import { BuildDescriptionSection } from "@/sections/buildPage/BuildDescriptionSection";
import { ToolsSection } from "@/sections/buildPage/ToolsSection";
import { LABELS } from "@/shared/labels";
import React from "react";

export default function BuildPage() {
  return (
    <main>
      <PageHeader
        title={LABELS.BUILD_PAGE.TITLE}
        description={LABELS.BUILD_PAGE.DESCRIPTION}
      />
      <ToolsSection />
      <BuildDescriptionSection />
    </main>
  );
}
