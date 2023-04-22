import express, { RequestHandler } from 'express';

const app = express();
app.use(express.json());

const posts: any[] = [];

const requestLoggerMiddleware: RequestHandler =(req,res,next)=>{
    console.log('New request:', req.path, '-body', req.body);
    next();
}
app.use(requestLoggerMiddleware);

app.get('/posts',(req,res)=>{
    res.send({ posts })
});

app.post('/posts',(req,res)=>{
    const post = req.body;
    posts.push(post);
    res.status(201).json('send data');
})

app.listen(3000,()=>{
    console.log('app running')
});