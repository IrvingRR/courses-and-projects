import { Link } from "react-router-dom";
import { Button, Input, Loader } from "../../components/ui";
import { AuthTemplateContainer, Form, FormButtons, FormLinks, FormTitle } from "../../styled";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import { startSignUpWithEmailAndPasswordThunk } from "../../redux/auth/authThunks";

const initialForm = {
  displayName: { value: '', isValid: null },
  email: { value: '', isValid: null },
  password: { value: '', isValid: null }
};

const regex = {
  displayName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  password: /^.{8,50}$/
};

export const SignupPage = () => {

  const dispatch = useDispatch();
  const { isChecking } = useSelector(state => state.auth);

  const onSignUp = () => {
    const data = {
      displayName: displayName.value,
      email: email.value,
      password: password.value
    };

    dispatch(startSignUpWithEmailAndPasswordThunk(data));
  };

  const { handleChange, handleSubmit, form } = useForm(initialForm, onSignUp); 
  const { displayName, email, password  } = form;

  return (
    <AuthTemplateContainer>
        <Loader isLoading={isChecking}/>
        <Form onSubmit={handleSubmit}>
            <FormTitle>Sign up</FormTitle>
            <Input type='text' name='displayName' label='Name:' legend='Invalid name' isValid={ displayName.isValid } value={displayName.value} onChange={(e) => handleChange(e, regex.displayName)}/>
            <Input type='text' name='email' label='Email address:' legend='Invalid email address' isValid={ email.isValid } value={email.value} onChange={(e) => handleChange(e, regex.email)}/>
            <Input type='password' name='password' label='Password:' legend='Password must to have minimum 8 characters' isValid={password.isValid} value={password.value} onChange={(e) => handleChange(e, regex.password)}/>
            <FormButtons>
                <Button>Create</Button>
            </FormButtons>
            <FormLinks>
                <Link to='/login'>I have an account already</Link>
                <Link to='/'>Back to home</Link>
            </FormLinks>
        </Form>
    </AuthTemplateContainer>
  );
};