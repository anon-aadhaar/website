import { MenuItem } from "@/shared/types";

const NAVIGATION: MenuItem[] = [
  {
    title: "Projects",
    href: "/projects",
    position: "left",
  },
  {
    title: "Build",
    href: "/build",
    position: "left",
  },
  {
    title: "Learn",
    href: "/learn",
    position: "left",
  },
  {
    title: "Documentation",
    href: "https://anon-aadhaar-documentation.vercel.app/docs/intro",
    position: "right",
    external: true,
  },
  {
    title: "GitHub",
    href: "https://github.com/anon-aadhaar/anon-aadhaar",
    position: "right",
    external: true,
  },
  {
    title: "Design kit",
    href: "",
    position: "right",
    external: true,
    onlyFooter: true,
  },
];

export const SETTINGS = {
  INFO_MAIL: "mailto:yanis@pse.dev",
};

const NAVIGATION_SOCIAL: MenuItem[] = [
  {
    title: "Discord",
    href: "https://discord.com/invite/sF5CT5rzrR",
    external: true,
  },
  {
    title: "Twitter",
    href: "https://twitter.com/AnonAadhaar",
    external: true,
  },
  {
    title: "Telegram",
    href: "https://t.me/anon_aadhaar",
    external: true,
  },
];

export const LINKS: Record<string, string> = {
  WEBSITE_DEMO: " https://anon-aadhaar-example.vercel.app/",
};

export default function useSettings() {
  const leftNavItems = NAVIGATION.filter((item) => item.position === "left");
  const rightNavItems = NAVIGATION.filter((item) => item.position === "right");
  const socialNavItems = NAVIGATION_SOCIAL;

  return {
    leftNavItems,
    rightNavItems,
    socialNavItems,
  };
}
