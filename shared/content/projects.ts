export type WebsiteType = "discord" | "github" | "website";
export interface ProjectItem {
  pse: boolean;
  categories: string[];
  name: string;
  description?: string;
  event?: string;
  links?: Partial<Record<WebsiteType, string>>;
}

export const LinkIconMapping: Partial<Record<WebsiteType, string>> = {
  discord: "/icons/discord.svg",
  github: "/icons/github.svg",
  website: "/icons/website.svg",
};

export const PROJECTS: ProjectItem[] = [
  {
    pse: false,
    name: "AaveAnonify",
    links: {
      website: "https://devfolio.co/projects/aaveanonify-cbd3",
      github: "https://github.com/MukulKolpe/ETHMumbai",
    },
    event: "ETHMumbai 2024",
    description: "DeFi Meets Artistry in a Tokenized Future",
    categories: ["Defi", "Artistry", "Tokenization"],
  },
  {
    pse: false,
    name: "Trip Companion",
    links: {
      website: "https://devfolio.co/projects/trip-companion-d3bf",
    },
    event: "ETHMumbai 2024",
    description:
      "Social - find the right partner to travel along in any journey",
    categories: ["Social", "Travel", "Companionship"],
  },
  {
    pse: false,
    name: "Banganoir",
    links: {
      website: "https://ethglobal.com/showcase/banganoir-sozqd",
    },
    event: "ETHGlobal Circuit Breaker 2024",
    description:
      "Account Abstraction - Banganoir is an ERC4337 Wallet controlled by your Aadhaar identity",
    categories: ["Account Abstraction", "ERC4337", "Identity"],
  },
  {
    pse: false,
    name: "BackItUp",
    links: {
      website: "https://ethglobal.com/showcase/backitup-oghff",
    },
    event: "ETHIndia 2023",
    description:
      "Account Abstraction - Crypto backup and recovery system built completely on chain using Zero-Knowledge",
    categories: ["Crypto Backup", "On-Chain", "Zero-Knowledge"],
  },
  {
    pse: false,
    name: "agoraCrypt",
    links: {
      website: "https://ethglobal.com/showcase/agoracrypt-fc51h",
    },
    event: "ETHIndia 2023",
    description:
      "Governance - AgoraCrypt enables democratic voting using Multiple ZK Primitives",
    categories: ["Governance", "Voting", "Zero-Knowledge"],
  },
  {
    pse: false,
    name: "Aadhaar Shield",
    links: {
      website: "https://ethglobal.com/showcase/aadhaar-shield-peokf",
    },
    event: "ETHIndia 2023",
    description:
      "Identity - Mobile app with seamless QR codes to prove and verify Aadhaar's validity without exposing the actual details.",
    categories: ["Identity", "Aadhaar", "Privacy"],
  },
  {
    pse: false,
    name: "VerifyChainX",
    links: {
      website: "https://ethglobal.com/showcase/verifychainx-1rete",
    },
    event: "ETHIndia 2023",
    description:
      "Best Mobile Wallet - Quadratic Voting System, integrates Anon Aadhaar Authentication for secure identification and an ERC4337 Wallet compatible with Aadhaar cards Utilizing Custom Subgraphs to Visualize EAS Attestations",
    categories: ["Mobile Wallet", "Voting", "Identity Verification"],
  },
  {
    pse: false,
    name: "Crypto Aid",
    links: {
      website: "https://ethglobal.com/showcase/crypto-aid-z81zg",
    },
    event: "ETHIndia 2023",
    description:
      "Best social impact - It is a decentralised crypto donation platform with the unique factor that funds are stored in a smart contract and we verify the receiver with an Aadhaar card anonymously, once we are able to map users to their cause(s)",
    categories: ["Social Impact", "Crypto Donation", "Smart Contract"],
  },
];
