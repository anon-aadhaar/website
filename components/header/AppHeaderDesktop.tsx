"use client";

import useSettings from "@/hooks/useSettings";
import { classed } from "@tw-classed/react";
import { Icons } from "../Icons";
import { MenuItem } from "@/shared/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  items: MenuItem[];
};

const NavItemWrapper = classed.span(
  "p-2 text-sm text-base rounded-md text-anon uppercase cursor-pointer duration-300",
  {
    variants: {
      active: {
        false: "font-normal border border-transparent hover:border-primary",
        true: "border border-primary font-semibold",
      },
    },
  }
);

const NavItems = ({ items }: NavItemProps) => {
  const pathname = usePathname();

  return (
    <div className="flex gap-2">
      {items.map((item) => {
        const isActivePage = pathname === item.href;
        if (item.onlyFooter) return null;

        return (
          <NavItemWrapper key={item.href} active={isActivePage}>
            <Link
              href={item.href}
              className="flex gap-1 items-center"
              target={item.external ? "_blank" : undefined}
            >
              <span>{item.title}</span>
              {item?.external && (
                <Icons.ExternalLink className="text-anon mt-[-2px]" />
              )}
            </Link>
          </NavItemWrapper>
        );
      })}
    </div>
  );
};

export const AppHeaderDesktop = () => {
  const { leftNavItems, rightNavItems } = useSettings();

  return (
    <div className="hidden sticky top-6 md:flex z-10">
      <div className="flex gap-[70px] mx-auto p-[10px] rounded-lg bg-white/80 backdrop-blur-lg shadow-header">
        <NavItems items={leftNavItems} />
        <Link href="/">
          <Icons.Logo />
        </Link>
        <NavItems items={rightNavItems} />
      </div>
    </div>
  );
};
