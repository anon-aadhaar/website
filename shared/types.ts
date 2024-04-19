export type MenuItem = {
  title: string;
  href: string;
  position?: "left" | "right";
  external?: boolean;
  onlyFooter?: boolean;
};

export type BlogItem = {
  url: string;
  title: string;
  date: Date;
  label?: string;
  readTime?: number;
};

export type ItemPosition = "top" | "right" | "bottom" | "left";

export const ProjectsSources = ["pse", "community"] as const;
export const ProjectCategories = [
  "education",
  "social",
  "identity",
  "coordination",
  "autenticity",
  "nft",
  "trust",
  "iot",
  "ticketing",
  "interoperability",
  "data",
  "whistleblowing",
  "voting",
  "climate",
  "health",
  "infra",
] as const;

export type ProjectCategory = (typeof ProjectCategories)[number];
export type ProjectSource = (typeof ProjectsSources)[number];
