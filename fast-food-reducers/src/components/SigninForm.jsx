import toast from 'react-hot-toast';
import bcrypt from 'bcryptjs';
import { Link, useNavigate } from "react-router-dom";
import { Form, Box } from "../style-components/signinForm.styles";
import { Button } from "./Button";
import { Input } from "./Input";
import { useForm } from '../hooks';
import { createUserService } from '../services/users';
import { validateEmail } from '../helpers';

export const SigninForm = () => {

  const navigate = useNavigate();

  const initialValues = {
    name: { value: '', regexp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ },
    email: { value: '', regexp: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ },
    password: { value: '', regexp: /^.{8,60}$/ }
  };

  const createUser = async () => {

    const data = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
      role: 'customer',
      isDeleted: false
    }

   const existUserWithEmail = await validateEmail(data.email);
   
   if(existUserWithEmail.length > 0) {
    return toast.error(`Email not available`);
   }

   const salt = bcrypt.genSaltSync(10);
   const passwordEncrypted = bcrypt.hashSync(data.password, salt);

   data.password = passwordEncrypted;

   const response = await createUserService(data);

   if(response) {
    toast.success('Account created successlly! 👍');

    setTimeout(() => {
      navigate('/login')
    }, 1500);
   }
    
  }
  const { form, handleChange, handleSubmit } = useForm(initialValues, createUser);

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Sign in</h2>
        <Input type='text' name='name' placeholder='Name' legend='Invalid name' onChange={(e) => handleChange(e, initialValues.name.regexp)} value={form.name.value} isValid={form.name.isValid}/>
        <Input type='email' name='email' placeholder='Email address' legend='Invalid email address' onChange={(e) => handleChange(e, initialValues.email.regexp)} value={form.email.value} isValid={form.email.isValid}/>
        <Input type='password' name='password' placeholder='Password' legend='Password must to have 8 characters minimum' onChange={(e) => handleChange(e, initialValues.password.regexp)} value={form.password.value} isValid={form.password.isValid}/>
        <Box>
            <Button>Create</Button>
        </Box>
        <Box justifyContent='space-between'>
            <Link to='/login'>I have an account</Link>
            <Link to='/'>Back to home</Link>
        </Box>
    </Form>
  )
}
