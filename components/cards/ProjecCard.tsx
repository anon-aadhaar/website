import { ProjectItem, LinkIconMapping } from "@/shared/content/projects";
import Link from "next/link";
import Image from "next/image";
import { Tag } from "../ui/Tag";
import { HTMLAttributes } from "react";
import { cn } from "@/shared/utils";

interface ProjectItemProps
  extends ProjectItem,
    HTMLAttributes<HTMLDivElement> {}

export const ProjectCard = ({
  name,
  categories = [],
  links = {},
  className,
}: ProjectItemProps) => {
  return (
    <div className="relative group shadow-project-card border border-scarpa-100 rounded-[10px] p-6">
      <div className={cn("flex min-h-[220px] relative", className)}>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-8">
            {categories?.length > 0 && (
              <div className="flex gap-[10px] flex-wrap">
                {categories.map((tag, index) => (
                  <Tag className="!cursor-default" key={index}>
                    {tag}
                  </Tag>
                ))}
              </div>
            )}
            <div className=" md:h-20">
              <h3 className="text-anon font-rajdhani text-[28px] font-medium leading-[120%]">
                {name}
              </h3>
            </div>
          </div>
          {Object.entries(links).length > 0 && (
            <div className="flex gap-3 mt-auto">
              {Object.entries(links).map(([key, value]) => {
                const icon = (LinkIconMapping as any)?.[key];

                if (!icon) return null;
                return (
                  <Link
                    key={key}
                    className="inline-flex"
                    href={value}
                    target="_blank"
                  >
                    <Image
                      width={20}
                      height={20}
                      src={icon}
                      alt={key}
                      className="cursor-pointer opacity-40 group-hover:opacity-100 duration-300"
                    />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <Image
          width={85}
          height={85}
          src="/illustrations/project-card-shape.svg"
          alt="project card shape"
          className="absolute right-0 bottom-0 opacity-10 grayscale duration-200 group-hover:grayscale-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};
