import { Icons } from "@/components/Icons";
import { Label } from "@/components/ui/Label";
import { cn } from "@/shared/utils";
import { classed } from "@tw-classed/react";
import Link from "next/link";
import { Section } from "@/components/Section";
import { AppContainer } from "@/components/AppContainer";

const DescriptionSection = classed.section(
  "grid grid-cols-1 w-full md:items-center lg:grid-cols-2 md:gap-0"
);

const ContentWrapper = classed.div("md:px-0", {
  variants: {
    reverse: {
      true: "lg:ml-[110px]",
      false: "lg:mr-[110px]",
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
    <Section.Wrapper color="green" className="flex flex-col gap-14">
      {BUILD_ITEMS.map(({ title, description, image, links = [] }, index) => {
        const isReverse = index % 2 !== 0;
        return (
          <AppContainer
            key={index}
            containerClass="flex flex-col gap-14"
            element={
              <div
                className={cn(
                  "relative lg:absolute h-[380px] md:h-[490px] md:w-[788px] xl:h-[590px] xl:w-[888px] object-cover bg-center ",
                  isReverse
                    ? "-left-8  md:left-0 md:-translate-x-20 lg:-translate-x-60 rounded-r-[48px]"
                    : "-right-8 md:right-0 md:translate-x-20 lg:translate-x-60 rounded-l-[48px]"
                )}
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: "cover",
                }}
              ></div>
            }
          >
            <DescriptionSection className="lg:h-[645px] ">
              <ContentWrapper
                className={cn(
                  "flex flex-col gap-24",
                  isReverse
                    ? "order-2 md:order-2 pr-8 md:pr-20 md:col-start-2"
                    : "md:order-1"
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
            </DescriptionSection>
          </AppContainer>
        );
      })}
    </Section.Wrapper>
  );
};
