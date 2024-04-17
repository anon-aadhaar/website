import { ProjectCategory } from "../types";

export type WebsiteType = "discord" | "github" | "website";
export interface ProjectItem {
  name: string;
  tags: string[];
  pse: boolean;
  links?: Partial<Record<WebsiteType, string>>;
  categories?: ProjectCategory[];
}

export const LinkIconMapping: Partial<Record<WebsiteType, string>> = {
  discord: "/icons/discord.svg",
  github: "/icons/github.svg",
  website: "/icons/website.svg",
};

export const PROJECTS: ProjectItem[] = [
  {
    pse: true,
    name: "Anon Aadhaar",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "",
    },
  },
  {
    pse: true,
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
  {
    pse: true,
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
  {
    pse: false,
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
  {
    pse: true,
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
];
