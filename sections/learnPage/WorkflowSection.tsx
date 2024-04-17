import { AppContainer } from "@/components/AppContainer";
import { Label } from "@/components/ui/Label";
import { classed } from "@tw-classed/react";
import React from "react";

const SectionWrapper = classed.section("flex flex-col gap-6");
export const WorkflowSection = () => {
  return (
    <AppContainer className="flex flex-col gap-14">
      <SectionWrapper>
        <Label.Section className="uppercase">Introduction</Label.Section>
        <Label.Paragraph className="text-scarpa-500">
          Anon Aadhaar is a zero-knowledge protocol designed to enable Aadhaar
          citizens to prove their possession of an Aadhaar document issued and
          signed by the government. This process ensures anonymity by utilizing
          the Aadhaar secure QR code, presents on e-Aadhaar and Aadhaar
          print-letter, preserving the confidentiality of the Aadhaar number.
        </Label.Paragraph>
      </SectionWrapper>
      <SectionWrapper>
        <Label.Section className="uppercase">Workflow</Label.Section>
        <Label.Paragraph className="text-scarpa-500">
          <strong className="font-semibold">
            RSA and Document Verification
          </strong>
          <span>
            At the core of this verification process lies RSA, a powerful
            cryptographic signature algorithm. RSA involves a private key used
            for signing and a corresponding public key used for verification of
            signatures. The innovative part of the Anon Aadhaar protocol is that
            this verification happens inside of a circuit, and the process
            results in a zk SNARK proof, hiding all the personal information
            needed to verify the signature. Resulting in a proof that attest
            identity without revealing it.
          </span>
          <span>
            Selective Disclosure empowers users with the ability to generate
            verifiable proofs for selected information. For now, Anon Aadhaar
            supports the disclosure of:
            <ul className="block list-disc ml-6">
              <li>Age (confirming if over 18)</li>
              <li>Pincode</li>
              <li>State</li>
              <li>Gender</li>
            </ul>
          </span>
        </Label.Paragraph>
      </SectionWrapper>
    </AppContainer>
  );
};
