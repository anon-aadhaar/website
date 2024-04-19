export const LEARN_PAGE_LABELS = {
  TITLE: "Anon aadhaar: private identity",
  DESCRIPTION: "Steps happening while generating the proof",
  STEPS: {
    FIRST: {
      TITLE: "FIRST.",
      DESCRIPTION: "Extract and process the data from the QR code",
      ITEMS: [
        "Read the QR code and extract both the signature and the signed data",
        "Verifying the signature",
        "Fetching the official UIDAI public key",
        "Hash the signal",
      ],
    },
    SECOND: {
      TITLE: "SECOND.",
      DESCRIPTION: "Generate an anon-aadhaar proof",
      ITEMS: [
        "Hash the Signed Data",
        "Verify the Signature of the Hashed Data",
        "Extract the photo from the Signed Data",
        "Extract Identity Fields if requested",
        "Compute Nullifiers",
        "Convert Timestamp from IST to UNIX UTC Format",
        `"Signing" the SignalHash`,
      ],
    },
  },
};
