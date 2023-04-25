import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import { initDb } from './datastore';
import { signInHandler, signUpHandler } from './handlers/userHandler';

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
    
    app.get('/v1/posts',listPostHandler);
    app.post('/v1/posts',createPostHandler);

    app.post('/v1/signup',signUpHandler);
    app.post('/v1/signin',signInHandler);

    
    app.listen(3000,()=>{
        console.log('app running')
    });

})();

