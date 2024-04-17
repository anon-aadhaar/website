import { classed } from "@tw-classed/react";

const CardBase = classed.div("rounded-lg overflow-hidden duration-200", {
  variants: {
    variant: {
      primary: "bg-anon hover:bg-anon-accent border border-black-pearl ",
      secondary: "bg-transparent border border-anon-accent hover:bg-primary/10",
      white: "bg-scarpa border border-scarpa-200 hover:bg-scarpa-50",
    },
    spacing: {
      medium: "p-5",
    },
  },
  defaultVariants: {
    spacing: "medium",
    variant: "primary",
  },
});

const CardImage = classed.div("min-h-[155px] bg-gray-300 bg-cover bg-center");
const CardContent = classed.div("p-5");
const CardTitle = classed.h4(
  "text-white text-lg font-medium font-inter leading-[150%"
);
const CardTag = classed.span(
  "text-xs leading-4 tracking-[0.06px] font-inter uppercase font-normal"
);
const SmallLabel = classed.small(
  "text-[11px] leading-4 font-inter tracking-[0.05px] font-thin"
);

const Card = {
  displayName: "Card",
  Base: CardBase,
  Image: CardImage,
  Content: CardContent,
  Title: CardTitle,
  Tag: CardTag,
  SmallLabel,
};

export { Card };
