type Tool = {
  TITLE: string;
  DESCRIPTION: string[];
  IMAGE: string;
  URL: string;
};

// LIST OF TOOLS shown on the build page
const TOOLS: Tool[] = [
  {
    TITLE: "SDK",
    DESCRIPTION: [
      "Easy to use Typescript packages that wrap up commonly used functionality",
      "Manage state, generate and verify proofs, connect to deployed smart contracts",
      "Check the boilerplate to see an example",
    ],
    IMAGE: "/illustrations/sdk-shape.svg",
    URL: "",
  },
  {
    TITLE: "CIRCUITS",
    DESCRIPTION: [
      "Core circuits and setup of the Anon Aadhaar protocol written in Circom",
      "Extractor circuit, verify RSA signature, SHA hashing",
      "Modify only if necessary, useable as-they-are",
    ],
    IMAGE: "/illustrations/circuits-shape.svg",
    URL: "",
  },
  {
    TITLE: "BOILERPLATE",
    DESCRIPTION: [
      "Begin your projects with a ready-to-use example voting template",
      "Login with Aadhaar, generate proof, verify proof and vote anonymously",
      "Easily modify to align with specific project goals",
    ],
    IMAGE: "/illustrations/boilerplate-shape.svg",
    URL: "",
  },
];

export const BUILD_PAGE_LABELS = {
  TITLE: "LET'S BUILD SOMETHING NEW",
  DESCRIPTION:
    "Jumpstart your app development process with these building tools.",
  TOOLS,
};
