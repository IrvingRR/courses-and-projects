import { Heading, Container } from 'react-bulma-components';
import { LoginForm } from '../components';

export const LoginPage = () => {
  return (
    <Container style={{ width: 400, height: '100vh' }} display='flex' justifyContent='center' flexDirection='column' className="animate__animated animate__fadeIn">
      <Heading size={3}>Login</Heading>
      <LoginForm/>
    </Container>
  );
};
