"use client";

import { AppContainer } from "@/components/AppContainer";
import { ProjectCard } from "@/components/cards/ProjecCard";
import { Banner } from "@/components/elements/Banner";
import { Icons } from "@/components/Icons";
import { PageHeader } from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/Button";
import { Tag } from "@/components/ui/Tag";
import useProjects from "@/hooks/useProjects";
import { ProjectItem, PROJECTS } from "@/shared/content/projects";
import { LABELS } from "@/shared/labels";
import {
  ProjectCategories,
  ProjectSource,
  ProjectsSources,
} from "@/shared/types";
import { classed } from "@tw-classed/react";
import Image from "next/image";
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
  const { projects, handleSource, source, categories, handleCategory } =
    useProjects();
  const noResult =
    projects.length === 0 && (source !== undefined || categories.length > 0);

  return (
    <main>
      <PageHeader
        title="BUILT WITH ANON AADHAAR"
        description="Discover a curated showcase of innovative projects and applications developed using the Anon Aadhaar Protocol."
      >
        <div className="relative w-full inset-0">
          <div
            className="right-0 ml-auto md:absolute md:right-0 md:top-0 w-[330px] h-[330px] lg:w-[854px] lg:h-[507px] lg:top-14 bg-no-repeat"
            style={{
              backgroundImage: "url('illustrations/projects-shape-big.svg')",
            }}
          ></div>
        </div>
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
                {ProjectCategories.map((category, index) => {
                  const isActive = categories.includes(category);

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
        title="Show what you have built"
        description="We are missing your project! Add your project to this page and show your awesomeness to the world."
        className="lg:!text-left"
        actions={
          <Button className="uppercase" variant="black">
            {LABELS.COMMON.SUBMIT_PROJECT}
          </Button>
        }
      />
    </main>
  );
}
