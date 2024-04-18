import { AppContainer } from "@/components/AppContainer";
import { Section } from "@/components/Section";
import { Label } from "@/components/ui/Label";

export const PointSection = () => {
  return (
    <Section.Wrapper className="!py-28" color="green">
      <AppContainer className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative">
          <div className=" flex flex-col gap-20">
            <div className="flex flex-col gap-1">
              <Label.Section className="uppercase text-anon">
                AADHAAR PAIN POINTS
              </Label.Section>
              <span className="text-lg text-scarpa-500 font-normal font-inter leading-[150%]">
                Duis rhoncus, urna sit amet tristique commodo, turpis justo
                ullamcorper nisi, nec dapibus augue nibh sed enim.{" "}
              </span>
            </div>
            <div className="mx-auto size-[230px] bg-slate-50">image</div>
          </div>
        </div>
        <div></div>
      </AppContainer>
    </Section.Wrapper>
  );
};
