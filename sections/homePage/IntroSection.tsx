import { AppContainer } from "@/components/AppContainer";
import { Label } from "@/components/ui/Label";
import Image from "next/image";

export const IntroSection = () => {
  return (
    <div className="flex flex-col gap-16 pb-28">
      <div className="grid grid-rows-[1fr_410px] gap-8 md:gap-24 md:grid-rows-1 md:min-h-[560px] md:items-center md:grid-cols-2">
        <div className="relative order-2 md:order-1 h-full">
          <Image
            className="absolute left-0 top-0 md:h-[560px] md:w-[670px]"
            width={490}
            height={410}
            src="/illustrations/intro-shape.svg"
            alt="intro shape"
          />
        </div>
        <Label.Section className="uppercase order-1 md:order-2 px-8 md:pl-0 md:pr-20">
          Anon Aadhaar offers a groundbreaking zero-knowledge protocol
          empowering Aadhaar citizens to prove their identity while preserving
          their privacy
        </Label.Section>
      </div>
      <AppContainer>
        <Label.Section className="uppercase md:text-center">
          Developers, dive into a new era of security and privacy in your
          applications effortlessly!
        </Label.Section>
      </AppContainer>
    </div>
  );
};
