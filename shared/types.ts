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
  eventName?: string;
  readTime?: number;
};

export type ItemPosition = "top" | "right" | "bottom" | "left";
