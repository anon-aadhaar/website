import { classed } from "@tw-classed/react";

export const BannerWrapper = classed.div("bg-primary");

interface BannerProps {
  title: string;
  description?: string;
  actions?: React.ReactNode;
}

const BannerTitle = classed.h4(
  "text-white text-4xl leading-[120%] md:text-6xl md:leading-[105%] uppercase"
);

const BannerDescription = classed.span(
  "font-inter text-base leading-[150%] md:text-lg text-white"
);

const Banner = ({ title, description, actions }: BannerProps) => {
  return (
    <BannerWrapper className="py-14">
      <div className="mx-auto px-8 md:px-40 max-w-screen-2xl text-center">
        <div className="flex flex-col gap-9 items-center justify-between md:flex-row md:items-center">
          <div className="flex flex-col gap-4">
            <BannerTitle>{title}</BannerTitle>
            {description && (
              <BannerDescription>{description}</BannerDescription>
            )}
          </div>
          {actions}
        </div>
      </div>
    </BannerWrapper>
  );
};

Banner.displayName = "Banner";
Banner.Title = BannerTitle;

export { Banner };
