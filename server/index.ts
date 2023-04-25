import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import asyncHandler from 'express-async-handler';
import { initDb } from './datastore';

(async ()=> {
    await initDb()
    const app = express();
    app.use(express.json());
    
    const requestLoggerMiddleware: RequestHandler =(req,res,next)=>{
        console.log(req.method, req.path, '-body', req.body);
        next();
    }
    app.use(requestLoggerMiddleware);
    
    const errHandler: ErrorRequestHandler =(err, req, res, next) =>{
        console.log('uncaught exception', err);
        return res.status(500).send('Oops, an uncaught error occurred,please try again later')
    }
    app.use(errHandler)
    
    app.get('/v1/posts',asyncHandler,listPostHandler);
    app.post('/v1/posts',asyncHandler,createPostHandler);
    
    app.listen(3000,()=>{
        console.log('app running')
    });

})();

