import { Container } from './styles';
import { LinkButton, Box } from '../../components/atoms';

export const Home = () => {
  return (
    <Container>
      <h1>
        <span>Wish</span>list  
      </h1> 
      <p>Create yourself wishlit or the wishlist of your friends</p>
      <Box>
        <LinkButton to='/login'>Login</LinkButton>
        <LinkButton to='/signin'>Sign in</LinkButton>
      </Box>
    </Container>
  )
};