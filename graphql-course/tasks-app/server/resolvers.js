import { Task } from "./db.js";

export const resolvers = {
    // Queries
    Query: {
        tasks: () => Task.findAll(),
        
        taskById: (root, args) => Task.findById(args.id),

        taskByTitle: async (root, args) => {
            const tasksFilter = await Task.findAll();
            return tasksFilter.filter(task => task.title.toLowerCase().includes(args.title.toLowerCase()));
        },
        
        tasksByPriority: async (root, args) => {
            const tasksFilter = await Task.findAll();
            return tasksFilter.filter(task => task.priority.toLowerCase() === args.priority.toLowerCase());
        },

        tasksByStatus: async (root, args) => {
            const tasksFilter = await Task.findAll();
            return tasksFilter.filter(task => task.status.toLowerCase() === args.status.toLowerCase());
        }
    },

    // Mutations
    Mutation: {
        createTask: (root, {input}) => {
            return Task.create({...input, status: "Pending"});
        },

        updateTask:  (root, {input}) => {
            return Task.update(input);
        },

        deleteTask: (root, args) => {
            Task.delete(args.id);
            return "Task deleted.";
        }
        
    }

    // Types
}