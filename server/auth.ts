import jwt from 'jsonwebtoken';
import { jwtObject } from './types';

export function signJwt(obj: jwtObject): string {
    return jwt.sign(obj, getJwtSecret(), {
        expiresIn:'15d',  
    });
    
}

//throws on bad tokens
export function verifyJwt(token: string): jwtObject {
    return jwt.verify(token, getJwtSecret()) as jwtObject;
}

function getJwtSecret(): string {
    const secret =process.env.JWT_SECRET;
    if(!secret) {
        console.error('Missing JWT secret');
        process.exit(1);
    }
    return secret;
}