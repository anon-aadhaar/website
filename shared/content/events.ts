export interface EventItem {
  eventName: string;
  description: string;
  date: string;
  url: string;
}

export const EVENTS: EventItem[] = [
  {
    eventName: "Devcon",
    description:
      "Anon Aadhaar team will deliver an in-person talks and run workshops with hackers.",
    date: "Nov 12-15, 2024",
    url: "https://devcon.org/en/",
  },
  {
    eventName: "ETHIndia",
    description:
      "Anon Aadhaar team will deliver an in-person talk and sponsor prizes for the hackathon.",
    date: "December, 2024",
    url: "#",
  },
];
