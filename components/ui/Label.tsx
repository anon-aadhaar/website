import { classed } from "@tw-classed/react";

const Title = classed.h1(
  "text-anon uppercase font-medium text-5xl leading-[110%] md:text-[90px] md:leading-[105%]"
);

const Subtitle = classed.h3(
  "font-rajdhani text-4xl leading-[110%] font-medium md:text-5xl"
);

const Section = classed.h3(
  "font-rajdhani text-[36px] leading-[110%] md:text-4xl font-medium"
);

const Paragraph = classed.p(
  "text-base md:text-lg leading-[150%] font-inter text-anon"
);

const Label = {
  displayName: "Label",
  Title,
  Subtitle,
  Section,
  Paragraph,
};

export { Label };
