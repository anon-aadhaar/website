import { PROJECTS } from "@/shared/content/projects";
import { ProjectSource, ProjectCategory } from "@/shared/types";
import { arrayToggle } from "@/shared/utils";
import { useState } from "react";

export default function useProjects() {
  const [source, setSource] = useState<ProjectSource | undefined>();
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const categoryList: string[] = [
    // @ts-ignore
    ...new Set(PROJECTS.map((project) => project.categories).flat()),
  ];

  const handleCategory = (category: string) => {
    setActiveCategories(arrayToggle(activeCategories, category));
  };

  const handleSource = (id: ProjectSource) => {
    setSource(id);
  };

  const projects = PROJECTS
    // filter by source
    .filter((project) => (source ? project.pse === (source === "pse") : true))
    // filter by category
    .filter((project) =>
      activeCategories.length === 0
        ? true
        : activeCategories.some((category) => project?.categories?.includes(category))
    );

  return {
    source,
    activeCategories,
    projects,
    handleCategory,
    handleSource,
    categoryList,
  };
}
