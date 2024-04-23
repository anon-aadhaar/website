import { classed } from "@tw-classed/react";
import { HTMLAttributes, ReactNode } from "react";
import type * as Classed from "@tw-classed/react";
import { cn } from "@/shared/utils";

const AppContainerWrapper = classed.div("mx-auto max-w-screen-xl", {
  variants: {
    size: {
      default: "px-8 xl:px-0",
      small: "px-8 xl:px-0",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

interface AppContainerWrapperVariants
  extends Classed.VariantProps<typeof AppContainerWrapper> {
  containerClass?: string;
}
interface AppContainerProps
  extends AppContainerWrapperVariants,
    HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  element?: ReactNode;
}

export const AppContainer = ({
  children,
  element,
  size,
  containerClass,
  ...props
}: AppContainerProps) => {
  return (
    <div className={cn("relative w-full", containerClass)}>
      {element}
      <AppContainerWrapper size={size} {...props}>
        {children}
      </AppContainerWrapper>
    </div>
  );
};
