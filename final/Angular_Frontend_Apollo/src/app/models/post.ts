import { Author } from './author';

export interface Post {
  id: number;
  title: string;
  content: string;
  author?: Author;
  tags?: string[];
}

