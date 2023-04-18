import { COMPANY_QUERY, CREATE_JOB_MUTATION, DELETE_JOB_MUTATION, JOBS_QUERY, JOB_QUERY } from '../graphql/queries';
import { useMutation, useQuery } from '@apollo/client';
import { getAccessToken } from '../auth';

export const useJobs = () => {
    const { data, loading, error } = useQuery(JOBS_QUERY, {
        fetchPolicy: 'network-only'
    });

    const response = {
        jobs: data?.jobs,
        loading: loading,
        error: Boolean(error)
    }

    return response;
}

export const useJob = (id) => {
    const { data, loading, error } = useQuery(JOB_QUERY, {
        variables: { id: id }
    });

    const response = {
        job: data?.job,
        loading: loading,
        error: Boolean(error)
    }

    return response;
}

export const useCompany = (id) => {
    const { data, loading, error } = useQuery(COMPANY_QUERY, {
        variables: { id: id }
    });

    const response = {
        company: data?.company,
        loading: loading,
        error: Boolean(error)
    }

    return response;
}

export const useCreateJob = () => {
  const [mutate, { loading, error }] = useMutation(CREATE_JOB_MUTATION);
  
  return {
    createJob: async(title, description) => {
        const { data } = await mutate({
            variables: { 
                input: { 
                    title: title, 
                    description: description 
                } 
            },
            context: {
                headers: { 'Authorization': `Bearer ${getAccessToken()}` }
            },
            update: (cache, {data: { job }}) => {
                cache.writeQuery({
                    query: JOB_QUERY,
                    variables: { id: job.id },
                    data: job
                });
            }
        });

        return data.job;
    },
    loading: loading,
    error: Boolean(error)
  }

}

export const useDeleteJob = () => {
    const [mutate, { loading, error }] = useMutation(DELETE_JOB_MUTATION);
    
    return {
        deleteJob: async (id) => {
            const { data } = await mutate({
                variables: { id: id },
                context: {
                    headers: { 'Authorization': `Bearer ${getAccessToken()}` }
                }
            })

            console.log(data)
        },
        loading: loading,
        error: Boolean(error)
    }
}