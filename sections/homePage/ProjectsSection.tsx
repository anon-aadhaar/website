import { AppContainer } from "@/components/AppContainer";
import { ProjectCard } from "@/components/cards/ProjecCard";
import { Icons } from "@/components/Icons";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { PROJECTS } from "@/shared/content/projects";
import { LABELS } from "@/shared/labels";
import Link from "next/link";

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
              return (
                <ProjectCard
                  className="h-full !min-h-[150px] !max-h-[150px] md:!min-h-[220px] md:!max-h-auto"
                  key={index}
                  {...project}
                />
              );
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
