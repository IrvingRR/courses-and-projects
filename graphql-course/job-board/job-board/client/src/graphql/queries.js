import { ApolloClient, gql, InMemoryCache } from '@apollo/client';
import { getAccessToken } from '../auth';

const GRAPHQL_URL = "http://localhost:9000/graphql";

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache()
});

const JOB_DETAIL_FRAGMENT = gql`
    fragment JobDetail on Job {
        id
        title
        description
        company {
            id
            name
        }
    }
`;

export const JOB_QUERY = gql`
    query JobQuery($id: ID!) {
        job(id: $id) {
            ...JobDetail
        }
    }

    ${JOB_DETAIL_FRAGMENT}
`;

export const JOBS_QUERY = gql`
    query JobsQuery {
        jobs {
            id
            title
            company {
                name
            }
        }
    }
`;

export const COMPANY_QUERY = gql`
    query CompanyQuery($id: ID!) {
        company(id: $id) {
            id
            name
            description
            jobs {
                id
                title
            }
        }
    }
`; 

export const CREATE_JOB_MUTATION = gql`
    mutation CreateJobMutation($input: CreateJobInput!){
        job: createJob(input: $input){
            id
            title
            description
            company {
                id
                name
            }
        }
    }
`;

export const DELETE_JOB_MUTATION = gql`
    mutation DeleteJobMutation($id: ID!) {
        deleteJob(id: $id)
    }
`;

export async function deleteJob(id) {
    const query = gql`
        mutation DeleteJobMutation($id: ID!) {
            deleteJob(id: $id)
        }
    `;

    const variables = { id: id };
    const { deleteJob } = await client.mutate(GRAPHQL_URL, query, variables);
    return deleteJob;
}

export async function updateJob(input) {
    const query = gql`
        mutation UpdateJobMutation($input: UpdateJobInput!) {
            updateJob(input: $input) {
                id
                title
                description
                company {
                    id
                    name
                }
            }
        }
    `;

    const variables = { input: input };
    const { updateJob } = await client.mutate(GRAPHQL_URL, query, variables);
    return updateJob;
}