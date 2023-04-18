import { Link } from 'react-router-dom';
import { Input, Button, Box } from '../atoms';
import { Fields, Form } from '../../global-styles-components';
import { useForm } from '../../hooks/useForm';
import { toast } from 'react-hot-toast';
import { loginService } from '../../services';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {

  const navigate = useNavigate();

  const fieldsValues = {
    email: {
      value: '',
      isValid: null,
      regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    },

    password: {
      value: '',
      isValid: null,
      regexp: /^.{8,60}$/
    }
  };

  const successCallback = async () => {

    const data = {
      email: form.email.value,
      password: form.password.value
    };

    const request = await loginService(data);

    if(!request.response.user) {
      return toast.error(request.response);
    }
    
    const { user, token } = request.response;

    localStorage.setItem('wishlist-auth', JSON.stringify({ token, user }));
    toast.success(`Welcome ${user.name} 👋`);

    setTimeout(() => {

      window.location.reload();
      // navigate('/panel');

    }, 2000);

  };

  const errorCallback = () => toast.error("Please fill in form correctlly");

  const { form, handleChange, handleSubmit } = useForm(fieldsValues, successCallback, errorCallback);

  return (
    <Form onSubmit={ handleSubmit }>
      <h2>Login</h2>
      <Fields>
        <Input type='text' name='email' placeholder='Email address' legend='Invalid email address' onChange={ (e) => handleChange(e, fieldsValues.email.regexp) } value={ form.email.value } isValid={ form.email.isValid }/>
        <Input type='password' name='password' placeholder='Password' legend='Invalid password' onChange={ (e) => handleChange(e, fieldsValues.password.regexp) } value={ form.password.value } isValid={ form.password.isValid }/>
      </Fields>
      <Box padding='0'>
        <Button>Ok</Button>
      </Box>
      <Box display='flex' aligItems='center' justifyContent='space-between' width='100%' padding='0'>
          <Link to='/signin'>I need an account</Link>
          <Link to='/'>Back to home</Link>
      </Box>
    </Form>
  )
}