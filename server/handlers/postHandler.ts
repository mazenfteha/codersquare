import { CreatePostRequest, CreatePostResponse } from "../api";
import { db } from "../datastore"
import { ExpressHandler, Post } from "../types";
import crypto from 'crypto'



export const listPostHandler: ExpressHandler<{}, {}> = (req,res)=>{
    res.send({ posts: db.listPosts() })
}



export const createPostHandler : ExpressHandler<CreatePostRequest,CreatePostResponse> = (req,res)=>{ 
    if(!req.body.title || !req.body.url || !req.body.userId ){
        return res.sendStatus(400);
    }
    const post : Post ={
        id: crypto.randomUUID(),
        postedAt: Date.now(),
        title: req.body.title,
        url: req.body.url,
        userId: req.body.userId,
    }
    db.createPost(post);
    res.status(201).json('Post created');
}