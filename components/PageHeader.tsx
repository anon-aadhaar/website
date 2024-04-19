import { HTMLAttributes, ReactNode } from "react";
import { AppContainer } from "./AppContainer";
import { Label } from "./ui/Label";
import { cn } from "@/shared/utils";
import { classed } from "@tw-classed/react";
import type * as Classed from "@tw-classed/react";

const ContentHeaderWrapper = classed.div("", {
  variants: {
    contentFullWidth: {
      false: "w-full sm:max-w-[360px] md:max-w-[427px] lg:max-w-[828px]",
    },
  },
  defaultVariants: {
    contentFullWidth: false,
  },
});

interface ContentHeaderWrapperVariants
  extends Classed.VariantProps<typeof ContentHeaderWrapper> {}
interface PageHeaderProps
  extends HTMLAttributes<HTMLDivElement>,
    ContentHeaderWrapperVariants {
  preTitle?: string;
  title: string;
  description?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
}

export const PageHeader = ({
  title,
  preTitle,
  description,
  actions,
  children,
  contentFullWidth = false,
  className = "",
}: PageHeaderProps) => {
  return (
    <div className="pt-20 pb-14 md:pt-12 w-full">
      <div className="relative grid grid-cols-1 md:grid-cols-[1fr_minmax(0px,_1fr)] gap-5 md:gap-0">
        <div
          className={cn(
            "flex relative md:min-h-[610px] md:flex md:items-center w-full",
            className
          )}
        >
          <div className="flex flex-col gap-10 px-8 md:pl-20">
            <ContentHeaderWrapper
              contentFullWidth={contentFullWidth}
              className="flex flex-col gap-5"
            >
              <div className="flex flex-col">
                {preTitle && (
                  <span className="uppercase text-[28px] font-medium text-anon md:text-4xl">
                    {preTitle}
                  </span>
                )}
                <Label.Title>{title}</Label.Title>
              </div>
              {description && (
                <span className="text-scarpa-500 text-base font-inter md:text-lg">
                  {description}
                </span>
              )}
            </ContentHeaderWrapper>
            {actions}
          </div>
        </div>
        {children}
      </div>
    </div>
  );
};
