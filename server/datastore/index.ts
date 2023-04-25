import {UserDao} from './dao/UserDao';
import {PostDao} from './dao/PostDao';
import {LikeDao} from './dao/LikeDao';
import {CommentDao} from './dao/CommentDao';
//import { InMemoryDatastore } from './memorydb';
import { SqlDateStore } from './sql';



export interface Datastore extends UserDao, PostDao, LikeDao, CommentDao {}

export let db: Datastore;

export async function initDb() {
    //db = new InMemoryDatastore();
    db = await new SqlDateStore().openDb();
} 