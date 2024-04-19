import { Icons } from "@/components/Icons";
import { Label } from "@/components/ui/Label";
import { cn } from "@/shared/utils";
import { classed } from "@tw-classed/react";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";

const DescriptionSection = classed.section(
  "grid grid-cols-1 gap-14 w-full md:items-center md:grid-cols-2 md:gap-0"
);

const ContentWrapper = classed.div("px-8 md:px-0", {
  variants: {
    reverse: {
      true: "md:ml-[110px]",
      false: "md:mr-[110px]",
    },
  },
  defaultVariants: {
    reverse: false,
  },
});

interface BuildItem {
  title: string;
  description: string;
  image: string;
  links?: {
    title: string;
    url: string;
  }[];
}

const BUILD_ITEMS: BuildItem[] = [
  {
    title: "Contribute to anon aadhaar",
    description:
      "Anon Aadhaar is open source with dozens of community contributors. You can propose improvements to the protocol or take good first issues to get started.",
    image: "/illustrations/contribute.jpg",
    links: [
      {
        title: "GOOD FIRST ISSUES",
        url: "https://github.com/anon-aadhaar/anon-aadhaar/labels/good%20first%20issue",
      },
      {
        title: "ENHANCE THE PROTOCOL",
        url: "https://github.com/anon-aadhaar/anon-aadhaar/blob/main/.github/PULL_REQUEST_TEMPLATE.md",
      },
      {
        title: "GIVE FEEDBACK ABOUT THE WEBSITE",
        url: "https://github.com/anon-aadhaar/anon-aadhaar/discussions/155",
      },
    ],
  },
  {
    title: "Project ideas to explore with anon aadhaar",
    image: "/illustrations/projects-idea.jpg",
    description:
      "The team has created this list of project ideas to build with Anon Aadhaar, but there are many more to be discovered.",
    links: [
      {
        title: "GET INSPIRED",
        url: "https://github.com/anon-aadhaar/anon-aadhaar/discussions/155",
      },
    ],
  },
];

export const BuildDescriptionSection = () => {
  return (
    <Section.Wrapper color="green" className=" flex flex-col gap-14">
      {BUILD_ITEMS.map(({ title, description, image, links = [] }, index) => {
        const isReverse = index % 2 !== 0;
        return (
          <DescriptionSection key={index}>
            <ContentWrapper
              className={cn(
                "flex flex-col gap-24",
                isReverse
                  ? "order-2 md:order-2 pr-8 md:pr-20"
                  : "md:order-1 pl-8 md:pl-20"
              )}
              reverse={isReverse}
            >
              <div className="flex flex-col gap-5">
                <Label.Subtitle className="uppercase font-medium text-black">
                  {title}
                </Label.Subtitle>
                <span className="text-base leading-[150%] font-inter text-gray-600 md:text-lg font-normal">
                  {description}
                </span>
              </div>
              {links?.length > 0 && (
                <div className="flex flex-col gap-3 group">
                  {links?.map(({ title, url = "#" }, index) => {
                    return (
                      <Link
                        className="flex items-center gap-1 text-scarpa-600 hover:text-primary duration-200 py-0.5"
                        key={index}
                        href={url}
                        target="_blank"
                      >
                        <span className="text-base font-semibold leading-[110%] uppercase font-rajdhani">
                          {title}
                        </span>
                        <Icons.ArrowRight />
                      </Link>
                    );
                  })}
                </div>
              )}
            </ContentWrapper>
            <div
              className={cn(
                "relative h-[355px] md:h-[520px] object-cover bg-center ",
                isReverse
                  ? "order-1 md:order-1 mr-8 md:mr-0"
                  : "md:order-2 ml-8 md:ml-0"
              )}
            >
              <Image
                className={cn(
                  "blur-[0.5px]",
                  isReverse ? "rounded-r-[48px]" : "rounded-l-[48px]"
                )}
                src={image}
                fill
                alt="illustration"
              />
            </div>
          </DescriptionSection>
        );
      })}
    </Section.Wrapper>
  );
};
