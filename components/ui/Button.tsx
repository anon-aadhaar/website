import { ItemPosition } from "@/shared/types";
import { classed } from "@tw-classed/react";
import type * as Classed from "@tw-classed/react";
import React, { forwardRef, HTMLAttributes } from "react";

const ButtonComponent = classed.button(
  "relative overflow-hidden font-rajdhani font-semibold cursor-pointer justify-center flex items-center gap-2 rounded-[8px] inline-block disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ease-in-out",
  {
    variants: {
      variant: {
        green: "bg-primary text-baltic-sea-100",
        black: "bg-anon text-baltic-sea-100",
        white: "bg-baltic-sea-100 text-baltic-sea-900",
        transparent: "bg-transparent text-scarpa-600 hover:text-primary",
      },
      size: {
        medium:
          "tracking-[0.13px] text-[13px] md:text-base py-2 px-4 md:py-[10px] md:leading-6",
      },
    },
    defaultVariants: {
      variant: "green",
      size: "medium",
    },
    compoundVariants: [
      {
        variant: "transparent",
        className: "!py-0",
      },
    ],
  }
);

interface ButtonVariants extends Classed.VariantProps<typeof ButtonComponent> {
  iconPosition?: ItemPosition;
}

interface ButtonProps
  extends ButtonVariants,
    HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const IconPositionMapping: Record<ItemPosition, string> = {
  top: "flex flex-col items-center",
  right: "flex flex-row-reverse gap-2 items-center",
  bottom: "flex flex-col-reverse gap-1 items-center",
  left: "flex items-center gap-2",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { children, variant, size, icon, iconPosition = "right" } = props;

  return (
    <ButtonComponent ref={ref} variant={variant} size={size} {...props}>
      <div className={`${IconPositionMapping[iconPosition ?? "right"]} z-[2]`}>
        {icon}
        <span className="font-rajdhani">{children}</span>
      </div>
    </ButtonComponent>
  );
});

Button.displayName = "Button";

export { Button };
