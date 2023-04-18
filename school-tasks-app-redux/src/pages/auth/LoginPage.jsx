import { Link } from "react-router-dom";
import { Button, Input, Loader } from "../../components/ui";
import { AuthTemplateContainer, Form, FormButtons, FormLinks, FormTitle } from "../../styled";
import { FaGoogle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { startAuthenticationWithEmailAndPasswordThunk, startAuthenticationWithGoogleThunk } from "../../redux/auth";
import { useForm } from "../../hooks";

const initialForm = {
  email: { value: '', isValid: null },
  password: { value: '', isValid: null }
};

const regex = {
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{1,50}$/
};

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { isChecking } = useSelector(state => state.auth);

  const onEmailAndPasswordLogin = () => {

    const data = {
      email: form.email.value,
      password: form.password.value
    };

    dispatch(startAuthenticationWithEmailAndPasswordThunk(data));
  }

  const onGoogleLogin = () => {
    dispatch(startAuthenticationWithGoogleThunk());
  };

  const { handleChange, handleSubmit, form } = useForm(initialForm, onEmailAndPasswordLogin);

  return (
    <AuthTemplateContainer>
      <Loader isLoading={isChecking}/>
      <Form onSubmit={handleSubmit}>
          <FormTitle>Login</FormTitle>
          <Input type='text' name='email' label='Email address:' onChange={(e) => handleChange(e, regex.email)} value={form.email.value}/>
          <Input type='password' name='password' label='Password:' value={form.password.value} onChange={(e) => handleChange(e, regex.password)}/>
          <FormButtons>
              <Button>Ok</Button>
              <Button variant='outline' onClick={onGoogleLogin} type='button'>
                <FaGoogle/>
                Google
              </Button>
          </FormButtons>
          <FormLinks>
              <Link to='/signup'>I don't have an account</Link>
              <Link to='/'>Back to home</Link>
          </FormLinks>
      </Form>
    </AuthTemplateContainer>
  );
};