import { classed } from "@tw-classed/react";

export const SectionWrapper = classed.section("relative", {
  variants: {
    color: {
      green: "bg-forest-green-50",
      blue: "bg-anon",
    },
    spacing: {
      true: "py-30",
      false: "py-0",
    },
  },
  defaultVariants: {
    spacing: true,
  },
});

export const SectionContentWrapper = classed.section("flex flex-col gap-14");

const Section = {
  displayName: "Section",
  Wrapper: SectionWrapper,
  Content: SectionContentWrapper,
};

export { Section };
