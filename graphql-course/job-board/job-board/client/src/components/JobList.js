import { Link } from 'react-router-dom';
import { useDeleteJob } from '../graphql/hooks';
import { deleteJob, getJobs } from '../graphql/queries';

function JobItem({ job }) {
  const title = job.company ? `${job.title} at ${job.company.name}` : job.title;
  const { deleteJob } = useDeleteJob();

  return (
    <li className="media">
      <div className="media-content">
        <Link to={`/jobs/${job.id}`}>
          {title}
        </Link>
        <div>
          <button onClick={() =>  deleteJob(job.id)}>Delete</button>
          <Link to={`/jobs/update/${job.id}`}>
              Update
          </Link>
        </div>
      </div>
    </li>
  );
}

function JobList({ jobs }) {
  return (
    <ul className="box">
      {jobs.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </ul>
  );
}

export default JobList;
