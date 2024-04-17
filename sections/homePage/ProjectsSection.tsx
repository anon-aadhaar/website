import { AppContainer } from "@/components/AppContainer";
import { Icons } from "@/components/Icons";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { Tag } from "@/components/ui/Tag";
import {
  LinkIconMapping,
  ProjectItem,
  PROJECTS,
} from "@/shared/content/projects";
import { LABELS } from "@/shared/labels";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ name, tags = [], links = {} }: ProjectItem) => {
  return (
    <div className="group shadow-project-card border border-scarpa-100 rounded-[10px] p-6">
      <div className="flex min-h-[220px] relative">
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-8">
            {tags?.length > 0 && (
              <div className="flex gap-[10px] flex-wrap">
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
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
            <div className="mt-auto">
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

export const ProjectSection = () => {
  const PROJECTS_TO_SHOW = 4;
  const projectsOverview = PROJECTS.slice(0, PROJECTS_TO_SHOW);

  return (
    <Section.Wrapper>
      <AppContainer className="grid grid-cols-1 gap-14 lg:grid-cols-[400px_1fr]">
        <Label.Section className="uppercase text-anon">
          {LABELS.HOME_PAGE.PROJECTS.TITLE}
        </Label.Section>
        <div className="flex flex-col gap-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projectsOverview.map((project, index) => {
              return <ProjectCard key={index} {...project} />;
            })}
          </div>
          <Link className="mx-auto" href="/projects">
            <Button
              className="uppercase"
              variant="transparent"
              icon={<Icons.ArrowRight />}
            >
              {LABELS.COMMON.VIEW_MORE}
            </Button>
          </Link>
        </div>
      </AppContainer>
    </Section.Wrapper>
  );
};
