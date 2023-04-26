import { Post, User } from "./types";

//Post APIs
export type CreatePostRequest = Pick<Post, 'title'|'url'|'userId'>;
export interface CreatePostResponse{}

// Comment APIs

//like APIs

//User APIs
export type SignUpRequest = Pick<User,'email'|'firstName'|'lastName'|'username'|'password'>;
export interface SignUpResponse {
    jwt:string;
}

export interface SignInRequest{
    login: string; //username or email
    password: string;
}
export type SignInResponse ={
    user: Pick<User,'email'|'firstName'|'lastName'|'username'|'id'>;
    jwt: string;
} 