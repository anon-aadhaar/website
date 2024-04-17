import { AppContainer } from "@/components/AppContainer";
import { Section } from "@/components/Section";
import { Card } from "@/components/ui/Card";
import { Label } from "@/components/ui/Label";
import { EventItem, EVENTS } from "@/shared/content/events";
import { LABELS } from "@/shared/labels";
import { formatDate } from "@/shared/utils";
import Image from "next/image";
import Link from "next/link";

const EventCard = ({ eventName, description, date }: EventItem) => {
  return (
    <Card.Base
      className="flex flex-col gap-[14px] md:flex-row md:items-end appear-fade"
      variant="white"
    >
      <div className="flex flex-col">
        <span className=" font-rajdhani text-base font-medium uppercase tracking-[0.16px] text-primary">
          {date}
        </span>
        <Label.Subtitle className="uppercase text-anon">
          {eventName}
        </Label.Subtitle>
      </div>
      <span className="text-scarpa-500 font-inter text-base font-normal leading-6">
        {description}
      </span>
    </Card.Base>
  );
};

export const EventSection = () => {
  return (
    <Section.Wrapper className="!pt-0 grid grid-cols-1 grid-rows-[340px_1fr] gap-24 lg:grid-rows-1 lg:grid-cols-[300px_1fr] lg:!pt-30">
      <Image
        width={300}
        height={320}
        src="/illustrations/anon-events.svg"
        alt="event illustration"
        className="absolute top-0 left-0"
      />
      <div className="row-start-2 lg:row-start-1 lg:col-start-2">
        <AppContainer className="flex flex-col gap-12 lg:gap-16 lg:!pl-0">
          <Label.Subtitle className="uppercase text-anon">
            {LABELS.COMMON.FIND_US_EVENTS}
          </Label.Subtitle>
          <div className="flex flex-col gap-6">
            {EVENTS.map((event, index) => {
              return (
                <Link key={index} href={event?.url} target="_blank">
                  <EventCard {...event} />
                </Link>
              );
            })}
          </div>
        </AppContainer>
      </div>
    </Section.Wrapper>
  );
};
