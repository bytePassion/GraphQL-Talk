import { Post, Author } from "models";
import { DataGenerator } from "data-generator";

export class DataService {

    private posts: Post[];
    private authors: Author[];

    constructor(dataGenerator: DataGenerator) {
        this.authors = dataGenerator.generateAuthors();
        this.posts = dataGenerator.generatePosts(150, this.authors);
    }

    getAllPosts(): Post[] {
        return [...this.posts].reverse();
    }

    addPost(authorId: number, title: string, content: string, tags: string[]): Post {
        
        const newPost: Post = {
            id: this.posts.length,
            title: title,
            content: content,
            oldContent: content,
            tags: tags ? tags : [],
            authorId: authorId
        }
        
        this.posts.push(newPost);

        return newPost;
    }

    getAllAuthors(): Author[] {
        return this.authors;
    }
}