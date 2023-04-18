import { ContainerLoader, Spinner } from './Loader.styles';

export const Loader = ({ ...props }) => {
  return (
    <ContainerLoader { ...props }>
        <h2>Loading</h2>
        <Spinner/>
    </ContainerLoader>
  )
}
