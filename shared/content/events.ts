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
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, atque perspiciatis! Rerum autem tempora voluptatem nostrum. Libero quidem magni dignissimos.",
    date: "July 8 - 11, 2024",
    url: "https://ethcc.io/",
  },
  {
    eventName: "Devcon",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat libero laudantium amet eum at dolore est, fugit, voluptas ipsa esse a totam ad ut maiores!",
    date: "Nov 09 - 17, 2024",
    url: "https://devcon.org/en/",
  },
  {
    eventName: "ETHIndia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, perspiciatis minus rem laboriosam aspernatur inventore hic aperiam ipsum magnam? Aliquid debitis eum repudiandae?",
    date: "Nov 09 - 17, 2024",
    url: "#",
  },
];
