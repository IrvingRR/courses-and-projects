import { Job, Company } from "./db.js";

const rejectIf = (condition, message) => {
    if(condition) {
        throw new Error(message);
    }
}

export const resolvers = {
    Query: {
        jobs: () => Job.findAll(),
        job: (root, args) => Job.findById(args.id),
        company: (root, args) => Company.findById(args.id)
    },

    Mutation: {
        createJob: (_root, { input }, { user }) => {
            rejectIf(!user, 'Unauthorized');
            return Job.create({ ...input, companyId: user.companyId });
        },
        deleteJob: async (_root, args, { user }) => {
            rejectIf(!user, 'Unauthorized');
            
            const job = await Job.findById(args.id);
            rejectIf(job.companyId !== user.companyId, 'You are not authorized to delete this job');
           
            Job.delete(args.id);
            return 'Job deleted successfully!';
        },
        updateJob: async (_root, { input }, { user }) => {
            rejectIf(!user, 'Unauthorized');
            const job = await Job.findById(input.id);
            rejectIf(job.companyId !== user.companyId, 'Unauthorized');
            return Job.update({ ...input, companyId: user.companyId });
        }
    },

    Job: {
        company: (job) => Company.findById(job.companyId)
    },

    Company: {
        jobs: (company) => Job.findAll(job => job.companyId === company.id)
    }
}