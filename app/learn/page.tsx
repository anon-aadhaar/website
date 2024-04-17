import { AppContainer } from "@/components/AppContainer";
import { Icons } from "@/components/Icons";
import { Accordion } from "@/components/ui/Accordion";
import { Label } from "@/components/ui/Label";
import { BlogSection } from "@/sections/learnPage/BlogSection";
import { WorkflowSection } from "@/sections/learnPage/WorkflowSection";
import React from "react";

export default function LearnPage() {
  return (
    <main>
      <div className="flex justify-center text-center pb-14 pt-56">
        <Label.Title className="uppercase">
          Anon aadhaar: private identity
        </Label.Title>
      </div>
      <WorkflowSection />
      <div className="flex flex-col">
        <AppContainer className="flex justify-center py-10">
          <Label.Subtitle className="font-medium text-anon uppercase">
            Steps happening while generating the proof
          </Label.Subtitle>
        </AppContainer>
        <div className="flex flex-col">
          <Accordion
            label="FIRST."
            description="Extract and process the data from the QR code"
            items={[
              "Read the QR code and extract both the signature and the signed data",
              "Verifying the signature",
              "Fetching the official UIDAI public key",
              "Hash the signal",
            ]}
          />
          <div className="flex justify-center bg-white py-5">
            <Icons.Logo color="#071631" size={90} />
          </div>
          <Accordion
            label="SECOND."
            description="Generate an anon-aadhaar proof"
            variant="green"
            items={[
              "Hash the Signed Data",
              "Verify the Signature of the Hashed Data",
              "Extract the photo from the Signed Data",
              "Extract Identity Fields if requested",
              "Compute Nullifiers",
              "Convert Timestamp from IST to UNIX UTC Format",
              `"Signing" the SignalHash`,
            ]}
          />
        </div>
      </div>
      <BlogSection />
    </main>
  );
}
