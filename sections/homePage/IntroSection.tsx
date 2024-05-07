import { AppContainer } from "@/components/AppContainer";
import { Label } from "@/components/ui/Label";
import Image from "next/image";
import { LABELS } from "@/shared/labels";

export const IntroSection = () => {
  return (
    <AppContainer
      element={
        <Image
          className="md:absolute left-0 top-0 h-[350px] w-[430px] md:h-[350px] md:w-[350px] xl:h-[610px] xl:w-[670px]"
          width={490}
          height={410}
          src="/illustrations/intro-shape.svg"
          alt="intro shape"
        />
      }
      containerClass="flex flex-col flex-col-reverse gap-14 md:flex md:justify-center min-h-[410px] lg:min-h-[560px]"
      className="flex flex-col gap-16 w-full"
    >
      <div className="w-full md:max-w-[440px] lg:max-w-[610px] gap-8 md:gap-24 ml-auto">
        {LABELS.HOME_PAGE.INTRO_SECTION.map((label, key) => (
          <Label.Section key={key} className="uppercase">
            {label}
          </Label.Section>
        ))}
      </div>
    </AppContainer>
  );
};
