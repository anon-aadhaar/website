import { classed } from "@tw-classed/react";

export const AppContainer = classed.div("mx-auto max-w-screen-2xl", {
  variants: {
    size: {
      default: "px-8 md:px-20",
      small: "px-8 md:px-32",
    },
  },
  defaultVariants: {
    size: "default",
  },
});
