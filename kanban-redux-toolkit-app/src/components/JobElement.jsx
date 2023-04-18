import { JobElementStyled } from "../styled";

export const JobElement = ({ job = {}, ...props }) => {
  return (
    <JobElementStyled { ...props }>
        <h3>{job.title}</h3>
        <p>{job.salary}$</p>
    </JobElementStyled>
  )
}
