"use client";

import useSettings, { SETTINGS } from "@/hooks/useSettings";
import { Icons } from "../Icons";
import { MenuItem } from "@/shared/types";
import Link from "next/link";
import { AppContainer } from "../AppContainer";
import { useEffect, useState } from "react";
import { cn } from "@/shared/utils";
import Image from "next/image";
import { LABELS } from "@/shared/labels";
import { classed } from "@tw-classed/react";
import { constants } from "buffer";

type NavItemProps = {
  items: MenuItem[];
  onClick: () => void;
};

const NavItem = classed.span(
  "flex items-center py-1 uppercase px-3 text-base duration-200 font-normal hover:text-primary gap-2"
);

const NavItems = ({ items, onClick }: NavItemProps) => {
  return (
    <div className="flex flex-col gap-1 md:gap-[10px] items-center sm:items-start">
      {items.map((item) => {
        return (
          <div key={item.href}>
            <Link href={item.href} onClick={onClick}>
              <NavItem>
                <span>{item.title}</span>
                {item?.external && <Icons.ExternalLink className="mt-[-3px]" />}
              </NavItem>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const AppHeaderMobile = () => {
  const { leftNavItems, rightNavItems, socialNavItems } = useSettings();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clientHeight = document.documentElement.clientHeight;

    document.body.style.height = isOpen ? `${clientHeight}px` : `auto`;
    document.body.style.overflow = isOpen ? "hidden" : "scroll";
  }, [isOpen]);

  return (
    <div className="flex sticky top-6 z-50 md:hidden">
      <AppContainer className="w-full">
        <div className="grid grid-cols-3 items-center p-[10px] justify-center w-full rounded-lg bg-white/90 backdrop-blur-lg shadow-header">
          <Link className="flex col-start-2" href="/">
            <Icons.Logo size={34} className="mx-auto" />
          </Link>
          <button
            type="button"
            aria-label="burgher menu"
            className="col-start-3 text-anon"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icons.Burgher className="ml-auto" />
          </button>
        </div>
      </AppContainer>
      <div
        className={cn(
          "fixed h-[100dvh] overflow-hidden duration-200 gap-3 sm:gap-5 inset-0 right-0 z-30 flex flex-col bg-anon text-white",
          isOpen ? "w-full px-10 pb-10" : "w-0"
        )}
      >
        <div className="flex justify-end pt-4 md:pt-10">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="toggle menu"
            className="h-6 md:h-10"
          >
            <Icons.Close className="text-white" />
          </button>
        </div>
        <div className="flex flex-col gap-8 sm:gap-16 h-full">
          <div className="grid grid-cols-1 sm:gap-16 sm:grid-cols-3">
            <NavItems items={leftNavItems} onClick={() => setIsOpen(false)} />
            <NavItems items={rightNavItems} onClick={() => setIsOpen(false)} />
            <NavItems items={socialNavItems} onClick={() => setIsOpen(false)} />
          </div>
          <div className="relative mx-auto size-40">
            <Image
              fill
              src="/illustrations/mobile-menu-shape.svg"
              alt="mobile menu shape"
            />
          </div>
          <div className="flex flex-col items-center justify-between pb-8">
            <Link href={`mailto:${SETTINGS.INFO_MAIL}`} target="_blank">
              <NavItem className="leading-none">
                <span>{LABELS.COMMON.FOOTER.FEEDBACK}</span>
                <Icons.ExternalLink className="mt-[-2px]" />
              </NavItem>
            </Link>
            <span className="text-scarpa-400 text-[13px] font-inter font-normal leading-[150%] py-1 md:py-[10px]">
              {LABELS.COMMON.FOOTER.COPY}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
