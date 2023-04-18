import { useState, useContext } from 'react';
import { Button, Content } from 'react-bulma-components';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useForm } from '../../hooks';
import { loginService } from '../../api/auth'; 
import { Input } from '../../ui';
import { AuthContext } from '../../contexts/AuthContext';

export const LoginForm = () => {

    const { login } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fieldsValues = {
        username: { value: '', isValid: null },
        password: { value: '', isValid: null }
    };

    const successCallback = async () => {
        const data = {
            username: form.username.value,
            password: form.password.value
        };

        try {
            setLoading(true);

            const response = await loginService(data);

            login(response.token);
            toast.success('Welcome');

            setTimeout(() => {
                navigate('/store');
            }, 2000);

        } catch(error) {
            toast.error('Invalid credentials');
         
        } finally {
            setLoading(false);
        }
    }

    const { form, handleChange, handleSubmit } = useForm(fieldsValues, successCallback);

  return (
    <>
        <form onSubmit={handleSubmit}>
            <Input size='small' type='text' name='username' placeholder='Username' autoComplete='off' onChange={ handleChange } legend='Invalid username' mb='2'/>
            <Input size='small' type='password' name='password' placeholder='Password' onChange={ handleChange } mb='2'/>
            <Button size='small' color='danger' loading={loading}>Login</Button>
        </form>

        {/* Links */}
        <Content size='small' display='flex' justifyContent='space-between' mt='3'>
            <Link to='/signin'>I don't have an account</Link>
            <Link to='/'>Back to home</Link>
        </Content>
    </>
  );
};

// mor_2314

// 83r5^_
