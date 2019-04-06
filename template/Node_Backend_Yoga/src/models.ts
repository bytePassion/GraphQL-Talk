export interface Post {
    id: number;
    title: string;
    content: string;    
    authorId: number;
    tags: string[];
}

export interface Author {
    id: number;
    name: string;
}