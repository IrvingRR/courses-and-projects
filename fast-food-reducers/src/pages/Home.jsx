import { Container, Box } from '../style-components/pages/home.styles';
import { LinkButton, Logo } from '../components';

export const Home = () => {
  return (
    <Container>
        <Logo/>
        <p>All your favorite food are here!</p>
        <Box>
            <LinkButton to='/login'>Login</LinkButton>
            <LinkButton variant='third' to='signin'>Sign in</LinkButton>
        </Box>
    </Container>
  )
}
