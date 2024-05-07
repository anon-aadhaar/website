export interface EventItem {
  eventName: string;
  description: string;
  date: string;
  url: string;
}

export const EVENTS: EventItem[] = [
  {
    eventName: "EthCC",
    description:
      "Bandada team will attend Progcrypto and deliver workshops on how to build applications with Bandada.",
    date: "July 8 - 11, 2024",
    url: "https://ethcc.io/",
  },
  {
    eventName: "Devcon",
    description:
      "Bandada team will attend Progcrypto and deliver workshops on how to build applications with Bandada.",
    date: "Nov 09 - 17, 2024",
    url: "https://devcon.org/en/",
  },
  {
    eventName: "ETHIndia",
    description:
      "Bandada team will attend Progcrypto and deliver workshops on how to build applications with Bandada.",
    date: "Nov 09 - 17, 2024",
    url: "#",
  },
];
