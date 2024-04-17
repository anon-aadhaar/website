import { Banner } from "@/components/elements/Banner";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/Button";
import { LABELS } from "@/shared/labels";
import React from "react";

export default function ProjectPage() {
  return (
    <main>
      <PageHeader
        title="BUILT WITH ANON AADHAAR"
        description="Discover a curated showcase of innovative projects and applications developed using the Anon Aadhaar Protocol."
      />
      <Banner
        title="Show what you have built"
        description="We are missing your project! Add your project to this page and show your awesomeness to the world."
        actions={
          <Button className="uppercase" variant="black">
            {LABELS.COMMON.SUBMIT_PROJECT}
          </Button>
        }
      />
    </main>
  );
}
