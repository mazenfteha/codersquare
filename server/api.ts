import { Post } from "./types";

//Post APIs
export type CreatePostRequest = Pick<Post, 'title'|'url'|'userId'>;
export interface CreatePostResponse{}

export interface ListPostsRequest{}
export interface ListPostsResponse{
    posts: Post[];
}