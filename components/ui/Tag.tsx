import { classed } from "@tw-classed/react";

export const Tag = classed.div(
  "text-[13px] px-2 rounded-lg font-inter font-medium leading-[150%] tracking-[0.26px]",
  {
    variants: {
      color: {
        primary: "text-primary bg-forest-green-50 border border-primary",
        secondary: "text-scarpa-400 bg-scarpa-50 border border-scarpa-200",
      },
    },
    defaultVariants: {
      color: "primary",
    },
  }
);
