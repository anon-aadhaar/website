import { Tab } from "@headlessui/react";
import { Fragment, HTMLAttributes, ReactNode } from "react";
import { Button } from "./Button";
import { cn } from "@/shared/utils";

interface TabProps extends HTMLAttributes<HTMLDivElement> {
  items: {
    label: string;
    children: ReactNode;
  }[];
}

export const Tabs = ({ items, className }: TabProps) => {
  return (
    <Tab.Group as={Fragment}>
      <div className={cn("flex flex-col", className)}>
        <Tab.List className="inline-flex mx-auto border border-primary rounded-[11px] p-1 gap-4">
          {items?.map(({ label }, index) => {
            return (
              <Tab as="div" key={index} className="outline-none">
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <Button
                    variant={selected ? "green" : "transparent"}
                    className={cn(
                      "uppercase !py-2 !px-4 break-words",
                      !selected && "!text-primary"
                    )}
                  >
                    {label}
                  </Button>
                )}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="pt-20">
          {items?.map(({ children }, index) => {
            return <Tab.Panel key={index}>{children}</Tab.Panel>;
          })}
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};
