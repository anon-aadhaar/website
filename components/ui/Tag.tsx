import { classed } from "@tw-classed/react";
import { ReactNode } from "react";

export const TagBase = classed.div("font-inter cursor-pointer", {
  variants: {
    color: {
      primary: "text-primary bg-forest-green-50 border border-primary",
      secondary: "text-scarpa-400 bg-scarpa-50 border border-scarpa-200",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

const TagComponentRounded = classed.div(
  TagBase,
  "font-medium leading-[150%] tracking-[0.26px] rounded-lg px-2 text-[13px]"
);

const TagComponentSquare = classed.div(
  TagBase,
  "py-2 px-4 text-sm md:text-[18px] font-medium tracking-[0.18px] rounded-lg leading-[27px]"
);

type TagType = "rounded" | "square";
type TagProps = React.ComponentProps<typeof TagBase> & {
  children: ReactNode;
  type?: TagType;
  icon?: ReactNode;
};

const TagByType: Record<TagType, any> = {
  rounded: TagComponentRounded,
  square: TagComponentSquare,
};

export const Tag = ({ children, type, icon, color, ...props }: TagProps) => {
  const Component = TagByType[type ?? "rounded"];
  return (
    <Component color={color ?? "primary"} {...props}>
      <div className="flex items-center gap-2">
        {icon}
        <div>{children}</div>
      </div>
    </Component>
  );
};
