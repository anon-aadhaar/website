"use client";
import { ReactNode, useState } from "react";
import type * as Classed from "@tw-classed/react";
import { cn, indexWithZero } from "@/shared/utils";
import { Icons } from "../Icons";
import { classed } from "@tw-classed/react";
import { AppContainer } from "../AppContainer";
import { Label } from "./Label";

const AccordionWrapper = classed.div("flex py-10 cursor-pointer duration-200", {
  variants: {
    variant: {
      orange: "bg-secondary",
      green: "bg-primary",
    },
    open: {
      true: "",
    },
  },
  defaultVariants: {
    variant: "orange",
  },
  compoundVariants: [
    {
      open: true,
      variant: "green",
      className: "!bg-[#EDFFED]",
    },
    {
      open: true,
      variant: "orange",
      className: "!bg-[#FFF9ED]",
    },
  ],
});

const AccordionContentWrapper = classed.div(
  "flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-3 md:items-center"
);

interface AccordionProps extends Classed.VariantProps<typeof AccordionWrapper> {
  label: string;
  description: string;
  children?: ReactNode;
  items?: string[];
}

const TextColorMapping: Record<
  NonNullable<AccordionProps["variant"]>,
  string
> = {
  orange: "text-secondary",
  green: "text-primary",
};

const DividerColorMapping: Record<
  NonNullable<AccordionProps["variant"]>,
  string
> = {
  orange: "divide-secondary",
  green: "divide-primary",
};

const Accordion = ({
  label,
  description,
  variant = "orange",
  children,
  items = [],
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const fontColor = isOpen ? TextColorMapping?.[variant] : "text-white";
  const dividerColor = DividerColorMapping?.[variant];

  return (
    <AccordionWrapper
      aria-expanded={isOpen}
      variant={variant}
      open={isOpen}
      onClick={() => {
        setIsOpen(!isOpen);
      }}
    >
      <AppContainer
        size="small"
        className="grid grid-cols-1 md:grid-cols-[1fr_20px] w-full"
      >
        <div className="relative">
          <AccordionContentWrapper className="relative">
            <Label.Subtitle
              className={cn("font-medium duration-200", fontColor)}
            >
              {label}
            </Label.Subtitle>
            <span
              className={cn(
                "text-2xl duration-200 uppercase font-medium md:text-4xl md:font-semibold",
                fontColor
              )}
            >
              {description}
            </span>
          </AccordionContentWrapper>
          <AccordionContentWrapper className="overflow-hidden box-border transition-all duration-200 ease-in-out">
            <div>{/* space */}</div>
            <div
              className={cn(
                "block overflow-hidden max-h-0 duration-200 ease-in-out",
                isOpen
                  ? "grid-rows-[1fr] opacity-100 max-h-full pt-8 md:pt-20"
                  : "grid-rows-[0fr] opacity-0"
              )}
            >
              {children}
              <div className={cn("flex flex-col divide-y", dividerColor)}>
                {items.map((label: string, index) => {
                  const indexWithZeroed = indexWithZero(index + 1).concat(".");
                  return (
                    <div
                      key={index}
                      className="grid grid-cols-[50px_1fr] items-center gap-4 py-[10px]"
                    >
                      <div>
                        <Label.Subtitle
                          className={cn(
                            "text-2xl duration-200 font-medium",
                            fontColor
                          )}
                        >
                          {indexWithZeroed}
                        </Label.Subtitle>
                      </div>
                      <span className="flex text-lg text-anon leading-[150%] font-inter">
                        {label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </AccordionContentWrapper>
          <Icons.ArrowUp
            className={cn("duration-200 absolute right-0 top-2", fontColor, {
              "transform rotate-180": !isOpen,
            })}
          />
        </div>
      </AppContainer>
    </AccordionWrapper>
  );
};

Accordion.displayName = "Accordion";
export { Accordion };
