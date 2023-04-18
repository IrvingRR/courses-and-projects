import { Link } from 'react-router-dom';
import { Form } from '../../styled';
import { Button, Input } from '../../components';

export const Signin = () => {
  return (
    <Form>
      <h2 className='animate__animated animate__fadeInDown'>Sign in</h2>
      <Input variant='gradient' type='text' name='name' placeholder='Name' className='animate__animated animate__fadeInDown animate__delay-1s'/>
      <Input variant='gradient' type='text' name='email' placeholder='Email address' className='animate__animated animate__fadeInDown animate__delay-2s'/>
      <Input variant='gradient' type='password' name='password' placeholder='Password' className='animate__animated animate__fadeInDown animate__delay-3s'/>
      <div className="form-links animate__animated animate__fadeInDown animate__delay-4s">
        <Link to='/login'>I have an account already</Link>
        <Link to='/' className='animate__animated animate__fadeInDown animate__delay-4s'>Back to home</Link>
      </div>
      <div className='animate__animated animate__fadeInDown animate__delay-5s'>
        <Button>Sign in</Button>
      </div>
    </Form>
  )
}