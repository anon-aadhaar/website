import { classed } from "@tw-classed/react";
import type * as Classed from "@tw-classed/react";
import { Icons } from "./Icons";

const AlertBannerWrapper = classed.div(
  "grid grid-cols-[20px_1fr] gap-4 p-4 rounded",
  {
    variants: {
      variant: {
        danger: "bg-west-side-50 border border-west-side-200",
      },
    },
    defaultVariants: {
      variant: "danger",
    },
  }
);

interface AlertBannerProps
  extends Classed.VariantProps<typeof AlertBannerWrapper> {
  label?: string;
  description: string;
}
export const AlertBanner = ({
  label = "Important note",
  description,
  variant,
}: AlertBannerProps) => {
  return (
    <AlertBannerWrapper variant={variant}>
      <Icons.Info />
      <span className="text-base font-inter leading-[150%] font-normal text-west-side-600">
        <strong className="font-semibold uppercase">{`${label}:`}</strong>{" "}
        {description}
      </span>
    </AlertBannerWrapper>
  );
};
