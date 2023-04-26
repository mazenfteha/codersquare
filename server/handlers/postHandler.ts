import { CreatePostRequest, CreatePostResponse } from "../api";
import { db } from "../datastore"
import { ExpressHandler, Post } from "../types";
import crypto from 'crypto'



export const listPostHandler: ExpressHandler<{}, {}> = async (req,res)=>
{   
    res.send({ posts: await db.listPosts() })
}



export const createPostHandler : ExpressHandler<CreatePostRequest,CreatePostResponse> = async (req,res)=>{ 
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
    await db.createPost(post);
    res.status(201).json('Post created');
}