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
      className="flex flex-col gap-[14px] md:flex-row md:items-start"
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
      <span className="text-scarpa-500 font-inter text-base font-normal leading-6 md:mt-5">
        {description}
      </span>
    </Card.Base>
  );
};

export const EventSection = () => {
  return (
    <Section.Wrapper className="!pt-0">
      <AppContainer
        element={
          <Image
            width={300}
            height={320}
            src="/illustrations/anon-events.svg"
            alt="event illustration"
            className="relative md:absolute top-0 left-0 h-[200px] w-[200px] md:w-[300px] md:h-[320px]"
          />
        }
      >
        <div className="flex flex-col md:ml-[340px] gap-12 lg:gap-16 !pt-14 md:!pt-30 lg:!pl-0">
          <Label.Subtitle className="uppercase text-anon">
            {LABELS.COMMON.FIND_US_EVENTS}
          </Label.Subtitle>
          <div className="flex flex-col gap-6">
            {EVENTS.map((event, index) => {
              return (
                <Link
                  key={index}
                  href={event?.url}
                  target={event?.url !== "#" ? "_blank" : undefined}
                >
                  <EventCard {...event} />
                </Link>
              );
            })}
          </div>
        </div>
      </AppContainer>
    </Section.Wrapper>
  );
};
