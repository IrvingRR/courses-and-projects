import { Database } from 'fakebase';

const db = new Database('./data');

export const Users = db.table('users');
export const Messages = db.table('messages');