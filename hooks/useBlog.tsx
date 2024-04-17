import { ARTICLES } from "@/shared/content/articles";
import { VIDEOS } from "@/shared/content/videos";
import { BlogItem } from "@/shared/types";

export default function useBlog() {
  const sortItems = (items: BlogItem[] = []) => {
    return items?.filter(Boolean).sort((a: any, b: any) => {
      if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    }) as BlogItem[];
  };

  return {
    blogVideos: sortItems(VIDEOS),
    blogArticles: sortItems(ARTICLES),
  };
}
