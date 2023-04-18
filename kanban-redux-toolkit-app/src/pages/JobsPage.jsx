import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { JobsList, Loader } from '../components';
import { JobsPageContainer } from '../styled';

export const JobsPage = () => {

  const { isJobLoading } = useSelector(state => state.jobs);

  return (
    <JobsPageContainer>
        { isJobLoading && <Loader/> }
        <JobsList/>
        <Outlet/>
    </JobsPageContainer>
  )
}
