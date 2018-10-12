export interface FeedItem {
  id: number;
  title: string;
  points?: number;
  user?: string;
  time: number;
  time_ago: string;
  comments_count: number;
  type: string;
  url?: string;
  domain?: string;
}
