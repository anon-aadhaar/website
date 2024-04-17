import { HTMLAttributes, ReactNode } from "react";
import { AppContainer } from "./AppContainer";
import { Label } from "./ui/Label";
import { cn } from "@/shared/utils";

interface PageHeaderProps extends HTMLAttributes<HTMLDivElement> {
  preTitle?: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
}

export const PageHeader = ({
  title,
  preTitle,
  description,
  actions,
  children,
  className = "",
}: PageHeaderProps) => {
  return (
    <div className="relative pt-16 pb-14 md:pt-12">
      <AppContainer
        className={cn("md:min-h-[610px]  md:flex md:items-center", className)}
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col">
              {preTitle && (
                <span className="uppercase text-[28px] font-medium text-anon md:text-4xl">
                  {preTitle}
                </span>
              )}
              <Label.Title className="md:w-3/4">{title}</Label.Title>
            </div>
            {description && (
              <span className="text-scarpa-500 text-base font-inter md:text-lg">
                {description}
              </span>
            )}
          </div>
          {actions}
        </div>
      </AppContainer>
      {children}
    </div>
  );
};
