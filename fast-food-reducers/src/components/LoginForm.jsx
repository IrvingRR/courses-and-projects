import { Link } from "react-router-dom";
import { Form, Box } from "../style-components/loginForm.styles";
import { Button } from "./Button";
import { Input } from "./Input";
import { useForm } from '../hooks';

export const LoginForm = () => {

  const initialValues = {
    email: { value: '', regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ },
    password: { value: '', regexp: /^.{8,60}$/ }
  };

  const loginFunction = (e) => {
    console.log(form);
  } 

  const { form, handleChange, handleSubmit } = useForm(initialValues, loginFunction);

  return (
    <Form>
        <h2>Login</h2>
        <Input type='email' name='email' placeholder='Email address' legend='Invalid email address' onChange={ (e) => handleChange(e, initialValues.email.regexp) } legend='Invalid email address'/>
        <Input type='password' name='password' placeholder='Password' legend='Invalid password'/>
        <Box>
            <Button>Ok</Button>
        </Box>
        <Box justifyContent='space-between'>
            <Link to='/signin'>I need an account</Link>
            <Link to='/'>Back to home</Link>
        </Box>
    </Form>
  )
}