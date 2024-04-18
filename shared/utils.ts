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

export const svgFillAnimation = (element: any, duration?: number) => {
  const svg = document.getElementById(element);
  const paths = svg?.querySelectorAll("path");
  paths?.forEach((path: any) => {
    const length = path.getTotalLength();
    //path.style.animationDuration = `${duration || 2}s`;
    path.addEventListener("mouseenter", () => {
      const color = path.attributes?.stroke.value;
      console.log(color);
      path.style.fill = color;
      /*path.style = {
        fill: color,
        //strokeDasharray: length.toString(),
        //strokeDashoffset: length.toString(),
        animation: `${duration || 0.25}s ease-in-out`,
      };*/
      //path.style.fill = color;
      //path.style.strokeDasharray = length.toString();
      //path.style.strokeDashoffset = length.toString();
      //path.style.animation = `stroke ${duration || 0.5}s ease forwards`;
    });
    /*path.addEventListener("mouseleave", () => {
      path.style.strokeDasharray = "none";
      path.style.strokeDashoffset = "none";
      path.style.animation = "none";
    });*/
    //path.style.fill = length.toString();
    //path.style.animation = `fill ${duration || 2}s ease forwards`;
  });
};
