import { PROJECTS } from "@/shared/content/projects";
import { ProjectSource, ProjectCategory } from "@/shared/types";
import { arrayToggle } from "@/shared/utils";
import { useState } from "react";

export default function useProjects() {
  const [source, setSource] = useState<ProjectSource | undefined>();

  const [categories, setCategories] = useState<ProjectCategory[]>([]);

  const handleCategory = (category: ProjectCategory) => {
    setCategories(arrayToggle(categories, category));
  };

  const handleSource = (id: ProjectSource) => {
    setSource(id);
  };

  const projects = PROJECTS
    // filter by source
    .filter((project) => (source ? project.pse === (source === "pse") : true))
    // filter by category
    .filter((project) =>
      categories.length === 0
        ? true
        : categories.some((category) => project?.categories?.includes(category))
    );

  return {
    source,
    categories,
    projects,
    handleCategory,
    handleSource,
  };
}
