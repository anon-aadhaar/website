import { MenuItem } from "@/shared/types";
import { AppContainer } from "./AppContainer";
import Link from "next/link";
import { Icons } from "./Icons";
import useSettings, { LINKS, SETTINGS } from "@/hooks/useSettings";
import { LABELS } from "@/shared/labels";
import { classed } from "@tw-classed/react";

type FooterNavItemProps = {
  items: MenuItem[];
};

const FooterNavItem = classed.span(
  "font-rajdhani uppercase text-base text-anon group-hover:text-primary duration-200 leading-[110%] py-2 px-[10px]"
);

const FooterNavItems = ({ items }: FooterNavItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      {items.map((item) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className="group flex items-center mx-auto md:mx-0"
            target={item.external ? "_blank" : undefined}
          >
            <FooterNavItem>{item.title}</FooterNavItem>
            {item?.external && (
              <Icons.ExternalLink className="text-anon group-hover:text-primary mt-[-2px]" />
            )}
          </Link>
        );
      })}
    </div>
  );
};
export const AppFooter = () => {
  const { leftNavItems, rightNavItems, socialNavItems } = useSettings();

  return (
    <div className="pt-16 pb-12">
      <AppContainer>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center gap-12 md:gap-4 md:flex-row md:justify-between md:items-start">
            <div className="flex flex-col gap-5 order-2 md:flex-row md:gap-16 md:order-none">
              <FooterNavItems items={leftNavItems} />
              <FooterNavItems items={rightNavItems} />
              <FooterNavItems items={socialNavItems} />
            </div>
            <Link href="/">
              <Icons.LogoFull className="order-1 h-24 md:h-auto md:order-2" />
            </Link>
          </div>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <span className="text-scarpa-400 text-[13px] font-inter font-normal leading-[150%] py-[10px] order-2 md:order-1">
              {LABELS.COMMON.FOOTER.COPY}
            </span>
            <Link
              className="group flex items-center order-1 md:order-2"
              href={`mailto:${SETTINGS.INFO_MAIL}`}
              target="_blank"
            >
              <FooterNavItem>{LABELS.COMMON.FOOTER.FEEDBACK}</FooterNavItem>
              <Icons.ExternalLink className="text-anon group-hover:text-primary mt-[-2px]" />
            </Link>
          </div>
        </div>
      </AppContainer>
    </div>
  );
};
