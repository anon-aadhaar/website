import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// format date to this format APRIL 3, 2024
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const indexWithZero = (index: number) => {
  return index.toString().padStart(2, "0");
};

// add or remove element from array
export const arrayToggle = (arr: any[], value: any) => {
  if (arr.includes(value)) {
    return arr.filter((item) => item !== value);
  }
  return [...arr, value];
};

export const svgHoverAnimation = (e: any) => {
  const clientX = e?.clientX;
  const clientY = e?.clientY;

  const pathElement = document
    ?.elementFromPoint(clientX, clientY)
    ?.closest("path");

  if (!pathElement) return;

  const color = (pathElement.attributes as any)?.stroke.value ?? "transparent";

  const startingColor = `#80${color.replace("#", "")}`;

  pathElement.animate(
    {
      fill: [startingColor, color],
    },
    {
      duration: 500,
      iterations: 1,
      easing: "ease-in-out",
    }
  );
};
