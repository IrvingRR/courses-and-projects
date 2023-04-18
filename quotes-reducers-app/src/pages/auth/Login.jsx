import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useContext, useState } from 'react';
import { Form } from '../../styled';
import { Button, Input } from '../../components';
import { useForm } from '../../hooks';
import { SessionContext } from '../../contexts';

export const Login = () => {

  const { login } = useContext(SessionContext);
  const [loading, setLoading] = useState(false);

  const expressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{4,12}$/ 
  }

  const initialValues = {

    email: { 
      value: '', 
      isValid: null, 
    },
    
    password: { 
      value: '', 
      isValid: null, 
    },

  };

  const successCallback = async () => {
    const data = {
      email: form.email.value,
      password: form.password.value,
    };

    try {
      
      setLoading(true);

      const request = await fetch('http://localhost:5000/users');
      const response = await request.json();
  
      const user = response.find(user => user.email === data.email);
      
      if(!user) return toast.error('Invalid credentials');
  
      if(user.password !== data.password) return toast.error('Invalid credentials');

      login(user);
        
      toast.success(`Hello ${user.name}`);
  
    } catch (error) {
      console.log(error);
    
    } finally {
      setLoading(false);
    }
  }

  const { form, handleChange, handleSubmit } = useForm(initialValues, successCallback);

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className='animate__animated animate__fadeInDown'>Login</h2>
      <Input variant='gradient' type='text' name='email' placeholder='Email address' className='animate__animated animate__fadeInDown animate__delay-1s' onChange={(e) => handleChange(e, expressions.email)} value={form.email.value}/>
      <Input variant='gradient' type='password' name='password' placeholder='Password' className='animate__animated animate__fadeInDown animate__delay-2s' onChange={(e) => handleChange(e, expressions.password)} value={form.password.value}/>
      <div className="form-links">
        <Link to='/signin' className='animate__animated animate__fadeInDown animate__delay-3s'>I don't have an account</Link>
        <Link to='/' className='animate__animated animate__fadeInDown animate__delay-4s'>Back to home</Link>
      </div>
      <div className='animate__animated animate__fadeInDown animate__delay-5s'>
        <Button loading={loading}>Login</Button>
      </div>
    </Form>
  )
}
