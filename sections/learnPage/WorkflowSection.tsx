import { AppContainer } from "@/components/AppContainer";
import { Label } from "@/components/ui/Label";
import { classed } from "@tw-classed/react";
import React from "react";

const SectionWrapper = classed.section("flex flex-col gap-6");
export const WorkflowSection = () => {
  return (
    <div>
      <AppContainer className="flex flex-col gap-14 pb-14">
        <SectionWrapper>
          <Label.Section className="uppercase">Introduction</Label.Section>
          <Label.Paragraph>
             
          </Label.Paragraph>
        </SectionWrapper>
        <SectionWrapper>
          <Label.Section className="uppercase">Workflow</Label.Section>
        </SectionWrapper>
      </AppContainer>
    </div>
  );
};
