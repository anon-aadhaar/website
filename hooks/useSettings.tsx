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
    href: "https://documentation.anon-aadhaar.pse.dev/docs/intro",
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
    href: "https://www.figma.com/file/vAO6X1nWBw96tUv5RTEylW/Anon-Aadhaar-Website?node-id=3%3A3&mode=dev",
    position: "right",
    external: true,
    onlyFooter: true,
  },
];

export const SETTINGS = {
  INFO_MAIL: "mailto:yanis@pse.dev",
};

export const LINKS: Record<string, string> = {
  WEBSITE_DEMO: " https://boilerplate.anon-aadhaar.pse.dev/",
  DISCORD: "https://discord.com/invite/sF5CT5rzrR",
  TWITTER: "https://twitter.com/AnonAadhaar",
  TELEGRAM: "https://t.me/anon_aadhaar",
  SUBMIT_PROJECT: "https://github.com/anon-aadhaar/website/labels/projects",
};

const NAVIGATION_SOCIAL: MenuItem[] = [
  {
    title: "Discord",
    href: LINKS.DISCORD,
    external: true,
  },
  {
    title: "Twitter",
    href: LINKS.TWITTER,
    external: true,
  },
  {
    title: "Telegram",
    href: LINKS.TELEGRAM,
    external: true,
  },
];

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
