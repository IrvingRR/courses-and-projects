import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Input, Button, Box } from '../atoms';
import { Form, Fields } from '../../global-styles-components';
import { useForm } from '../../hooks'; 
import { createUserService } from '../../services';

export const SigninForm = () => {

  const navigate = useNavigate();

  const fieldsValues = {
    name: {
      value: '',
      isValid: null,
      regexp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    },

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
      name: form.name.value,
      email: form.email.value,
      password: form.password.value
    }

    const request = await createUserService(data);

    if(request.errors) {
      return request.errors.map(error => toast.error(error.msg));
    }

    toast.success("Account created successfully!");

    setTimeout(() => {
      navigate('/login');
    }, 2000);    
  };

  const errorCallback = () => toast.error("Please fill in form correctlly");

  const { form, handleSubmit, handleChange } = useForm(fieldsValues, successCallback, errorCallback);

  return (
    <Form onSubmit={ handleSubmit }>
      <h2>Sign in</h2>
      <Fields>
        <Input type='text' name='name' placeholder='Name' isValid={ form.name.isValid } legend='Invalid name' onChange={ (e) => handleChange(e, fieldsValues.name.regexp) }/>
        <Input type='text' name='email' placeholder='Email address' isValid={ form.email.isValid } legend='Invalid email address' onChange={ (e) => handleChange(e, fieldsValues.email.regexp) }/>
        <Input type='password' name='password' placeholder='Password' isValid={ form.password.isValid } legend='Must to have 8 characters minimum' onChange={ (e) => handleChange(e, fieldsValues.password.regexp) }/>
      </Fields>
      <Box padding='0'>
        <Button>Create</Button>
      </Box>
      <Box display='flex' aligItems='center' justifyContent='space-between' width='100%' padding='0'>
          <Link to='/login'>I have an account already</Link>
          <Link to='/'>Back to home</Link>
      </Box>
    </Form>
  )
}