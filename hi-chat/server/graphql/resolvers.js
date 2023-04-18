
import { Users } from '../db.js';

export const resolvers = {
    // Queries
    
   Query: {
    users: async () => await Users.findAll(),
    user: async (_root, args) => await Users.findById(args.id),
    searchUserByName: async (root, args) => await Users.findAll(user => user.name.toLowerCase().startsWith(args.name.toLowerCase())),
    filterUserByStatus: async (root, args) => await Users.findAll(user => user.status.toLowerCase() === args.status.toLowerCase()),
   },
    
    //Mutations
   Mutation: {
    createUser: async (_root, { input }) => await Users.create({...input, status: 'Connected', friends: [] }),
    updateUser: async (_root, { input }) => await Users.update(input),
    deleteUser: async (_root, args) => {

        // await Users.delete(args.id);

        const users = await Users.findAll(user => user.friends.includes(args.id));
        
        
        return 'User deleted';
    }
   }

}