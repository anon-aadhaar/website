import { classed } from "@tw-classed/react";

export const SectionWrapper = classed.section("relative py-30", {
  variants: {
    color: {
      green: "bg-forest-green-50",
      blue: "bg-anon",
    },
  },
});

export const SectionContentWrapper = classed.section("flex flex-col gap-14");

const Section = {
  displayName: "Section",
  Wrapper: SectionWrapper,
  Content: SectionContentWrapper,
};

export { Section };
