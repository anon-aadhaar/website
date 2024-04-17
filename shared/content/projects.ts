export type WebsiteType = "discord" | "github" | "website";
export interface ProjectItem {
  name: string;
  tags: string[];
  links?: Partial<Record<WebsiteType, string>>;
}

export const LinkIconMapping: Partial<Record<WebsiteType, string>> = {
  discord: "/icons/discord.svg",
  github: "/icons/github.svg",
  website: "/icons/website.svg",
};

export const PROJECTS: ProjectItem[] = [
  {
    name: "Anon Aadhaar",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    links: {
      github: "",
    },
  },
  {
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
  {
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
  {
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
  {
    name: "Anon Aadhaar",
    tags: ["tag1", "tag2", "tag3"],
    links: {
      github: "",
    },
  },
];
