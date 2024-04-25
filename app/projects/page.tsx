"use client";

import { AppContainer } from "@/components/AppContainer";
import { ProjectCard } from "@/components/cards/ProjecCard";
import { Banner } from "@/components/elements/Banner";
import { Icons } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Shapes } from "@/components/Shape";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import useProjects from "@/hooks/useProjects";
import { LINKS } from "@/hooks/useSettings";
import { ProjectItem } from "@/shared/content/projects";
import { LABELS } from "@/shared/labels";
import { ProjectSource, ProjectsSources } from "@/shared/types";
import { svgHoverAnimation } from "@/shared/utils";
import { classed } from "@tw-classed/react";
import Link from "next/link";
import React from "react";

const ProjectSourceMapping: Record<
  ProjectSource,
  {
    label: string;
    icon: JSX.Element;
  }
> = {
  pse: {
    label: "PSE",
    icon: <Icons.PSE />,
  },
  community: {
    label: "Community",
    icon: <Icons.Community />,
  },
};

const SectionTitle = classed.div(
  "uppercase font-rajdhani text-baltic-sea-950 text-[22px] leading-[125%] font-semibold"
);

export default function ProjectPage() {
  const {
    projects,
    handleSource,
    source,
    activeCategories,
    handleCategory,
    categoryList,
  } = useProjects();
  const noResult =
    projects.length === 0 &&
    (source !== undefined || activeCategories.length > 0);

  return (
    <main>
      <PageHeader
        title={LABELS.PROJECTS_PAGE.TITLE}
        description={LABELS.PROJECTS_PAGE.DESCRIPTION}
      >
        <Shapes.ProjectsPage
          onMouseMove={svgHoverAnimation}
          className="z-1 right-0 ml-auto absolute top-0 w-[330px] h-[330px] md:right-[100px] md:w-[427px] md:h-[236px] lg:w-[854px] lg:h-[507px] lg:-right-[260px] xl:right-[-110px] lg:top-14 bg-no-repeat"
        />
      </PageHeader>
      <AppContainer>
        <Section.Wrapper className="!pt-14 grid grid-cols-1 gap-16 lg:grid-cols-[400px_1fr] ">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <SectionTitle>{LABELS.COMMON.PROJECTS_CREATED_BY}</SectionTitle>
              <div className="flex items-center gap-3">
                {ProjectsSources.map((projectSource, index) => {
                  const { label, icon } = ProjectSourceMapping[projectSource];

                  const isActive = source === projectSource;

                  return (
                    <Tag
                      key={index}
                      type="square"
                      icon={icon}
                      color={isActive ? "primary" : "secondary"}
                      onClick={() => handleSource(projectSource)}
                    >
                      <span className=" capitalize">{label}</span>
                    </Tag>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <SectionTitle>{LABELS.COMMON.CATEGORY}</SectionTitle>
              <div className="flex flex-wrap gap-3">
                {categoryList.map((category, index) => {
                  const isActive = activeCategories.includes(category);

                  return (
                    <Tag
                      key={index}
                      color={isActive ? "primary" : "secondary"}
                      onClick={() => handleCategory(category)}
                    >
                      {category}
                    </Tag>
                  );
                })}
              </div>
            </div>
          </div>
          {noResult ? (
            <div className="flex flex-col gap-2">
              <SectionTitle>{LABELS.COMMON.NO_RESULT}</SectionTitle>
              <span className="font-inter text-baltic-sea-950 text-base md:text-lg">
                {LABELS.COMMON.NO_RESULT_DESCRIPTION}
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project: ProjectItem, index: number) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </div>
          )}
        </Section.Wrapper>
      </AppContainer>
      <Banner
        title={LABELS.PROJECTS_PAGE.BANNER.TITLE}
        description={LABELS.PROJECTS_PAGE.BANNER.DESCRIPTION}
        className="lg:!text-left"
        actions={
          <Link href={LINKS.SUBMIT_PROJECT} target="_blank">
            <Button className="uppercase" variant="black">
              {LABELS.COMMON.SUBMIT_PROJECT}
            </Button>
          </Link>
        }
      />
    </main>
  );
}
