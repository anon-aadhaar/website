"use client";

import { AppContainer } from "@/components/AppContainer";
import { Section } from "@/components/Section";
import { Label } from "@/components/ui/Label";
import { Tabs } from "@/components/ui/Tabs";
import { classed } from "@tw-classed/react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface PainPointProps {
  tab: string;
  title: string;
  image: string;
  description: string;
}

const TabContentWrapper = classed.div(
  "flex flex-col justify-center items-center gap-14"
);
const ImageWrapper = classed.div("relative size-[180px] md:size-[230px]");

const PAIN_POINTS: PainPointProps[] = [
  {
    tab: "Data Breaches",
    title: "Data Breaches",
    description:
      "Unauthorized access to Aadhaar data can lead to severe consequences such as identity theft and fraud. By minimizing any personal identity information shared, you eliminate the risk of falling victim to such breaches.",
    image: "/illustrations/paint-point-1.svg",
  },
  {
    tab: "Surveillance Concerns",
    title: "Surveillance Concerns",
    description:
      "Concerns about Aadhaar's potential for surveillance, whether by public or private entities, are growing. Minimizing the amount of personal data shared can help individuals mitigate these concerns and maintain a greater degree of anonymity and privacy.",
    image: "/illustrations/paint-point-2.svg",
  },
  {
    tab: "Authentication Risks",
    title: "Authentication Risks",
    description:
      "Security lapses in the Aadhaar authentication process can expose individuals to various forms of misuse of your personal information. Anon Aadhaar SSO solves this by never revealing any information that can be linked back to you.",
    image: "/illustrations/paint-point-3.svg",
  },
];

const PainPointTabs = () => {
  return (
    <Tabs
      className="flex "
      items={PAIN_POINTS.map(
        ({ tab: tabLabel, title, description, image }) => ({
          label: tabLabel,
          children: (
            <TabContentWrapper>
              <ImageWrapper>
                <Image fill src={image} alt={tabLabel} />
              </ImageWrapper>
              <div className="flex flex-col gap-2 text-center">
                <Label.Section className="uppercase text-anon">
                  {title}
                </Label.Section>
                <span className="font-inter text-base md:text-lg text-scarpa-500 font-normal">
                  {description}
                </span>
              </div>
            </TabContentWrapper>
          ),
        })
      )}
    />
  );
};

const PainPointContent = () => {
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="hidden pb-80 gap-80 lg:flex lg:flex-col last-of-type:pb-0"
    >
      {PAIN_POINTS.map(({ tab, description }, index) => {
        return (
          <div key={index}>
            <Label.Section className="uppercase text-anon pt-8 border-t border-primary">
              {tab}
            </Label.Section>
            <span className="font-inter text-base md:text-lg text-scarpa-500 font-normal">
              {description}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export const PainPointSection = () => {
  const currentPainIndex = 0;

  const currentPaintPointImage = PAIN_POINTS?.[currentPainIndex]?.image ?? "";

  return (
    <Section.Wrapper
      className="lg:h-[540px] !py-28 overflow-scroll my-28"
      color="green"
    >
      <AppContainer className="flex flex-col gap-10 lg:grid lg:gap-24 lg:grid-cols-2 sticky">
        <div className="relative">
          <div className="flex flex-col gap-20 text-center lg:text-left sticky top-0">
            <div className="flex flex-col gap-1">
              <Label.Section className="uppercase text-anon">
                PROTECTING YOUR PRIVACY
              </Label.Section>
              <span className="text-lg text-scarpa-500 font-normal font-inter leading-[150%]">
                Safeguarding your personal information while using Aadhaar is
                essential. Anon Aadhaar through zero-knowledge proofs minimize
                the exposure of your data to unauthorized access, helping you
                maintain control over your privacy.{" "}
              </span>
            </div>
            <div className="hidden mx-auto relative size-[230px]">
              <Image
                fill
                src={currentPaintPointImage}
                alt="paint point image"
              />
            </div>
          </div>
        </div>

        <div>
          <PainPointContent />
          <div className="flex md:hidden">
            <PainPointTabs />
          </div>
        </div>
      </AppContainer>
    </Section.Wrapper>
  );
};
