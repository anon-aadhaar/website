"use client";

import { AppContainer } from "@/components/AppContainer";
import { Section } from "@/components/Section";
import { ShowMore } from "@/components/ShowMore";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import useBlog from "@/hooks/useBlog";
import { LABELS } from "@/shared/labels";
import { formatDate } from "@/shared/utils";
import { classed } from "@tw-classed/react";
import Link from "next/link";

const SectionLabel = classed.span(Label.Section, "text-white uppercase");

const BlogItemCard = classed.div(Card.Base, "flex flex-col gap-4");

export const BlogSection = () => {
  const { blogArticles, blogVideos } = useBlog();

  return (
    <Section.Wrapper color="blue">
      <AppContainer className="flex flex-col gap-24">
        <Label.Title className="text-white text-center uppercase">
          Blog
        </Label.Title>
        <Section.Content>
          <SectionLabel>{LABELS.COMMON.ARTICLES}</SectionLabel>
          <ShowMore
            desktopItemsToShow={6}
            mobileItemsToShow={4}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]"
          >
            {blogArticles.map((article, index) => {
              return (
                <Link key={index} href={article.url} target="_blank">
                  <BlogItemCard>
                    <Card.SmallLabel className="text-scarpa-400 uppercase">
                      {formatDate(article.date)}
                    </Card.SmallLabel>
                    <Card.Title className="line-clamp-2 h-14">
                      {article.title}
                    </Card.Title>
                    <Card.Tag className="text-secondary">
                      {article.label}
                    </Card.Tag>
                  </BlogItemCard>
                </Link>
              );
            })}
          </ShowMore>
        </Section.Content>
        <Section.Content>
          <SectionLabel>{LABELS.COMMON.VIDEOS}</SectionLabel>
          <ShowMore
            desktopItemsToShow={8}
            mobileItemsToShow={4}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]"
          >
            {blogVideos.map((video, index) => {
              return (
                <Link key={index} href={video.url} target="_blank">
                  <BlogItemCard>
                    <Card.SmallLabel className="text-scarpa-400 uppercase">
                      {formatDate(video.date)}
                    </Card.SmallLabel>
                    <div className="bg-scarpa-200 aspect-square"></div>
                    <Card.Title className="line-clamp-2 h-14">
                      {video.title}
                    </Card.Title>
                    <Card.Tag className="text-primary">{video.label}</Card.Tag>
                  </BlogItemCard>
                </Link>
              );
            })}
          </ShowMore>
        </Section.Content>
      </AppContainer>
    </Section.Wrapper>
  );
};
