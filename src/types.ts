export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  metrics: string;
  linkText: string;
}

export interface FeedbackEntry {
  id: string;
  author: string;
  message: string;
  timestamp: string;
}
