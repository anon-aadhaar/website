import { AppContainer } from "@/components/AppContainer";
import { Section } from "@/components/Section";
import { Label } from "@/components/ui/Label";
import { LABELS } from "@/shared/labels";
import { indexWithZero } from "@/shared/utils";
import { classed } from "@tw-classed/react";
import Image from "next/image";

interface FeatureItem {
  title: string;
  image: string;
}

const FEATURES: FeatureItem[] = [
  {
    title: "SDK to directly integrate with your dapp",
    image: "/illustrations/feature-1.svg",
  },
  {
    title: "PCD package to leverage this framework",
    image: "/illustrations/feature-2.svg",
  },
  {
    title: "React package to quickly integrate your front-end",
    image: "/illustrations/feature-3.svg",
  },
  {
    title: "Example app to try it and and fork",
    image: "/illustrations/feature-4.svg",
  },
  {
    title: "Proving time ~30s (avg on browser)",
    image: "/illustrations/feature-5.svg",
  },
];

const DividerWrapper = classed.div(
  "[&>*:nth-child(n+1)]:mt-[-1px] md:[&>*:nth-child(n+1)]:ml-[-1px] md:[&>*:nth-child(n+3)]:mt-[-1px] lg:[&>*:nth-child(n+1)]:ml-[-1px] lg:[&>*:nth-child(n+4)]:mt-[-1px]"
);

export const FeatureSection = () => {
  return (
    <Section.Wrapper color="blue">
      <AppContainer className="flex flex-col gap-24">
        <Section.Content>
          <Label.Section className="uppercase text-white">
            {LABELS.COMMON.FEATURES}
          </Label.Section>
          <DividerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
            {FEATURES.map(({ title, image }, index) => {
              const indexZeroed = indexWithZero(index + 1);
              return (
                <div
                  key={index}
                  className="flex flex-col gap-44 md:gap-64 border border-black-pearl rounded-lg p-[50px]"
                >
                  <Image
                    width={240}
                    height={131}
                    src={image}
                    alt={`feature illustration ${index + 1}`}
                  />
                  <div className="flex flex-col">
                    <span className="text-white font-rajdhani font-medium text-2xl leading-[120%]">
                      {indexZeroed}
                    </span>
                    <h4 className="text-white font-rajdhani font-medium text-4xl leading-[120%] uppercase">
                      {title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </DividerWrapper>
        </Section.Content>
      </AppContainer>
    </Section.Wrapper>
  );
};
