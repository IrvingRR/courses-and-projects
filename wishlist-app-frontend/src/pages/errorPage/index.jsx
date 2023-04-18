import { BiArrowBack } from "react-icons/bi";
import { LinkButton } from "../../components/atoms";
import { Container } from './styles';

export const ErrorPage = () => {

    return (
      <Container>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>Error 404 - Not found</i>
        </p>
        <LinkButton to='/'>
          <BiArrowBack/>
          Back
        </LinkButton>
      </Container>
    )
}