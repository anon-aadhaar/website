"use client";

import { ReactNode, useState } from "react";
import useMobile from "@/hooks/useMobile";
import { Button } from "./ui/Button";
import { LABELS } from "@/shared/labels";

const DEFAULT_ITEMS_TO_SHOW = 8;
interface ShowMoreProps {
  children: ReactNode[];
  desktopItemsToShow?: number;
  mobileItemsToShow?: number;
  className?: string;
}

export const ShowMore = ({
  children,
  className,
  desktopItemsToShow = DEFAULT_ITEMS_TO_SHOW,
  mobileItemsToShow = 2,
}: ShowMoreProps) => {
  const { isMobile, isTablet } = useMobile();
  const [isOpen, setIsOpen] = useState(false);

  // get the default items to show based on the device
  const defaultItems = isTablet
    ? desktopItemsToShow
    : isMobile
    ? mobileItemsToShow
    : DEFAULT_ITEMS_TO_SHOW;

  const itemsToShow = isOpen ? children : children.slice(0, defaultItems);
  const hasMoreItems = children.length > defaultItems;

  return (
    <div className="flex flex-col gap-14">
      <div className={className ?? ""}>
        {itemsToShow?.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
      {hasMoreItems && (
        <div className="relative flex">
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="mx-auto"
            variant="white"
          >
            {isOpen ? LABELS.COMMON.SHOW_LESS : LABELS.COMMON.SHOW_MORE}
          </Button>
        </div>
      )}
    </div>
  );
};

ShowMore.displayName = "ShowMore";
