import { Database } from 'fakebase';

const db = new Database('./data');

export const Task = db.table('tasks');