import express, { ErrorRequestHandler, RequestHandler } from 'express';
import { createPostHandler, listPostHandler } from './handlers/postHandler';
import { initDb } from './datastore';
import { signInHandler, signUpHandler } from './handlers/authHandler';
import { requestLoggerMiddleware } from './middleware/loggermiddleware';
import { errHandler } from './middleware/errorhandlerMiddleware';
import dotenv from 'dotenv'

(async ()=> {
    await initDb()

    dotenv.config();

    const app = express();
    app.use(express.json());
    
    app.use(requestLoggerMiddleware);
    app.use(errHandler)
    
    app.get('/v1/posts',listPostHandler);
    app.post('/v1/posts',createPostHandler);

    app.post('/v1/signup',signUpHandler);
    app.post('/v1/signin',signInHandler);

    
    app.listen(3000,()=>{
        console.log('app running')
    });

})();  


