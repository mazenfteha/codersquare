import { ErrorRequestHandler } from "express";

export const errHandler: ErrorRequestHandler =(err, req, res, next) =>{
    console.log('uncaught exception', err);
    return res.status(500).send('Oops, an uncaught error occurred,please try again later')
}