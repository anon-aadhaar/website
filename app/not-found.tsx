import { AppContainer } from "@/components/AppContainer";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/Button";
import { Label } from "@/components/ui/Label";
import { LABELS } from "@/shared/labels";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NotFoundPage() {
  return (
    <AppContainer className="flex flex-col items-center text-center  justify-center gap-14 h-[calc(100vh-82px)]">
      <Label.Title className="uppercase text-anon">
        404: Page not found
      </Label.Title>
      <div className="relative size-[146px] md:size-[240px]">
        <Image src="/illustrations/404-shape.svg" fill alt="404 illustration" />
      </div>
      <Label.Paragraph className="text-scarpa-500">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </Label.Paragraph>
      <Link href="/">
        <Button variant="green" icon={<Icons.ArrowRight />}>
          {LABELS.COMMON.GO_TO_HOME}
        </Button>
      </Link>
    </AppContainer>
  );
}
