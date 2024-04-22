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
    tab: "Paint point 1",
    title: "Paint point number 1",
    description:
      "Duis rhoncus, urna sit amet tristique commodo, turpis justo ullamcorper nisi, nec dapibus augue nibh sed enim. Nam ultricies finibus fermentum.",
    image: "/illustrations/paint-point-1.svg",
  },
  {
    tab: "Paint point 2",
    title: "Paint point number 2",
    description:
      "Duis rhoncus, urna sit amet tristique commodo, turpis justo ullamcorper nisi, nec dapibus augue nibh sed enim. Nam ultricies finibus fermentum.",
    image: "/illustrations/paint-point-2.svg",
  },
  {
    tab: "Paint point 3",
    title: "Paint point number 3",
    description:
      "Duis rhoncus, urna sit amet tristique commodo, turpis justo ullamcorper nisi, nec dapibus augue nibh sed enim. Nam ultricies finibus fermentum.",
    image: "/illustrations/paint-point-3.svg",
  },
];

const PainPointTabs = () => {
  return (
    <Tabs
      className="flex lg:hidden"
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
    <div ref={ref} className="hidden pb-80 gap-80 lg:flex lg:flex-col">
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
    <Section.Wrapper className="relative !py-28 overflow-hidden" color="green">
      <AppContainer className="lg:h-[540px] flex flex-col gap-10 lg:grid lg:gap-24 lg:grid-cols-2">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-1">
            <Label.Section className="uppercase text-anon">
              AADHAAR PAIN POINTS
            </Label.Section>
            <span className="text-lg text-scarpa-500 font-normal font-inter leading-[150%]">
              Duis rhoncus, urna sit amet tristique commodo, turpis justo
              ullamcorper nisi, nec dapibus augue nibh sed enim.{" "}
            </span>
          </div>
          <div className="mx-auto relative size-[230px]">
            <Image fill src={currentPaintPointImage} alt="paint point image" />
          </div>
        </div>
        <div className="overflow-scroll">
          <PainPointContent />
          <PainPointTabs />
        </div>
      </AppContainer>
    </Section.Wrapper>
  );
};
