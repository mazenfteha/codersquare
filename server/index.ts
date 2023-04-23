import express, { RequestHandler } from 'express';
import { db } from './datastore';
const app = express();
app.use(express.json());


const requestLoggerMiddleware: RequestHandler =(req,res,next)=>{
    console.log(req.method, req.path, '-body', req.body);
    next();
}
app.use(requestLoggerMiddleware);

app.get('/posts',(req,res)=>{
    res.send({ posts: db.listPosts() })
});

app.post('/posts',(req,res)=>{ 
    const post = req.body;
    db.createPost(post);
    res.status(201).json('Post created');
})

app.listen(3000,()=>{
    console.log('app running')
});