export interface EventItem {
  eventName: string;
  description: string;
  date: string;
  url: string;
}

export const EVENTS: EventItem[] = [
  {
    eventName: "EthCC",
    description: "Anon Aadhaar team will attend EthCC.",
    date: "July 8 - 11, 2024",
    url: "https://ethcc.io/",
  },
  {
    eventName: "Devcon",
    description: "Anon Aadhaar team will attend Devcon.",
    date: "Nov 09 - 17, 2024",
    url: "https://devcon.org/en/",
  },
  {
    eventName: "ETHIndia",
    description: "Anon Aadhaar team will attend ETHIndia.",
    date: "Nov 09 - 17, 2024",
    url: "#",
  },
];
