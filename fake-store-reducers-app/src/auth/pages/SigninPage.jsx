import { Heading, Container } from 'react-bulma-components';
import { SigninForm } from '../components/SigninForm';

export const SigninPage = () => {
  return (
    <Container style={{ width: 500, height: '100vh' }} display='flex' justifyContent='center' flexDirection='column' className="animate__animated animate__fadeIn">
      <Heading size={3}>Sign In</Heading>
      <SigninForm/>
    </Container>
  );
};
