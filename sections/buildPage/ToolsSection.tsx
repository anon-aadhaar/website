import { AlertBanner } from "@/components/AlertBanner";
import { AppContainer } from "@/components/AppContainer";
import { Card } from "@/components/ui/Card";
import { LABELS } from "@/shared/labels";

export const ToolsSection = () => {
  return (
    <AppContainer className="flex flex-col gap-14 pt-14 pb-30">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {LABELS.BUILD_PAGE.TOOLS.map(({ TITLE, DESCRIPTION, IMAGE }, index) => {
          return (
            <Card.Base
              key={index}
              className="flex flex-col gap-5 md:gap-14 h-full"
              variant="secondary"
            >
              <span className="text-center text-anon text-4xl font-medium leading-[105%] uppercase lg:text-5xl xl:text-6xl lg:leading-[110%]">
                {TITLE}
              </span>
              <div
                className="w-full aspect-square bg-[length:100px_auto] bg-repeat-space"
                style={{
                  backgroundImage: `url(${IMAGE})`,
                }}
              ></div>
              <ul className="flex flex-col gap-3 ml-5 list-disc">
                {DESCRIPTION?.map((description, index) => {
                  return (
                    <li
                      key={index}
                      className="text-anon font-inter font-normal text-base leading-6"
                    >
                      {description}
                    </li>
                  );
                })}
              </ul>
            </Card.Base>
          );
        })}
      </div>
      <AlertBanner description="Anon Aadhaar is still under development and should not be used in production. If you are considering production use, please get in touch with us for further guidance. The current protocol hides your identity from all parties except the Issuer of your Aadhaar. Please consider this when working with Anon Aadhaar proof." />
    </AppContainer>
  );
};
