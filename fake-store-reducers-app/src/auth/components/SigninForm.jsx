import { useState } from 'react';
import { Form, Button, Content } from 'react-bulma-components';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks';
import { Input } from '../../ui';
import { createUserService } from '../../api';

export const SigninForm = () => {

  const [loading, setLoading] = useState(false);

  const fieldsValues = {
    username: { value: '', isValid: null, regex: /^[a-zA-Z0-9\_\-]{4,16}$/ },
    firstname: { value: '', isValid: null, regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ },
    lastname: { value: '', isValid: null, regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ },
    phone: { value: '', isValid: null, regex: /^[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}$/ },
    email: { value: '', isValid: null, regex: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/ },
    password: { value: '', isValid: null, regex: /^.{4,12}$/ },
    city: { value: '', isValid: null, regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ },
    street: { value: '', isValid: null, regex: /^[a-zA-ZÀ-ÿ\s]{1,40}$/ },
    number: { value: '', isValid: null, regex: /^\d{1,5}$/ },
    zipcode: { value: '', isValid: null, regex: /^[0-9]{5}-[0-9]{4}$/ },
    latitude: { value: '', isValid: null, regex: /^((\-?|\+?)?\d+(\.\d+)?).\s*((\-?|\+?)?\d+(\.\d+)?)$/gi },
    longitude: { value: '', isValid: null, regex: /^((\-?|\+?)?\d+(\.\d+)?).\s*((\-?|\+?)?\d+(\.\d+)?)$/gi },
  }

  const successCallback = async () => {

    const { username, firstname, lastname, phone, email, password, city, street, number, zipcode, latitude, longitude } = form;

    const data = {
      email: email.value,
      username: username.value,
      password: password.value,
      name: {
        firstname: firstname.value,
        lastname: lastname.value,
      },
      address: {
        city: city.value,
        street: street.value,
        number: parseInt(number.value),
        zipcode: zipcode.value,
        geolocation: {
          lat: latitude.value,
          long: longitude.value
        }
      },
      phone: phone.value
    }

    try {

      setLoading(true);
      const response = await createUserService(data);
      
    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  }

  const { form, handleChange, handleSubmit } = useForm(fieldsValues, successCallback);

  return (
    <>
        <form onSubmit={handleSubmit}>
        {/* Input name and lastname */}
        <Form.Field>
          <Form.Field.Body>
              <Input size='small' type='text' name='firstname' placeholder='Firstname' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.firstname.regex) } legend='Invalid firstname'  isValid={form.firstname.isValid}/>
              <Input size='small' type='text' name='lastname' placeholder='Lastname' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.lastname.regex) } legend='Invalid lastname' isValid={form.lastname.isValid}/>
          </Form.Field.Body>
        </Form.Field>

        {/* Input username and phone */}
        <Form.Field>
          <Form.Field.Body>
              <Input size='small' type='text' name='username' placeholder='Username' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.username.regex) } legend='Please enter a valid username ' isValid={form.username.isValid}/>
              <Input size='small' type='text' name='phone' placeholder='phone' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.phone.regex) } legend='Example: 555-555-55-55' isValid={form.phone.isValid}/>
          </Form.Field.Body>
        </Form.Field>

        {/* Input email and password */}
        <Form.Field>
          <Form.Field.Body>
            <Input size='small' type='email' name='email' placeholder='Email address' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.email.regex) } legend='Invalid email address' isValid={form.email.isValid}/>
            <Input size='small' type='password' name='password' placeholder='Password' onChange={ (e) => handleChange(e, fieldsValues.password.regex) } legend='Password must to have 8 characters minimum' isValid={form.password.isValid}/>
          </Form.Field.Body>
        </Form.Field>
        
        {/* Input city and street */}
        <Form.Field>
          <Form.Field.Body>
            <Input size='small' type='text' name='city' placeholder='City' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.city.regex) } legend='Please enter a valid city' isValid={form.city.isValid}/>
            <Input size='small' type='text' name='street' placeholder='Street' onChange={ (e) => handleChange(e, fieldsValues.street.regex) } legend='Invalid street' isValid={form.street.isValid}/>
          </Form.Field.Body>
        </Form.Field>

        {/* Input latitude and longitude */}
        <Form.Field>
          <Form.Field.Body>
            <Input size='small' type='text' name='latitude' placeholder='Latitude' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.latitude.regex) } legend='Invalid latitude' isValid={form.latitude.isValid}/>
            <Input size='small' type='text' name='longitude' placeholder='Longitude' onChange={ (e) => handleChange(e, fieldsValues.longitude.regex) } legend='Invalid longitude' isValid={form.longitude.isValid}/>
          </Form.Field.Body>
        </Form.Field>

        {/* Input number and zipcode */}
        <Form.Field>
          <Form.Field.Body>
            <Input size='small' type='number' name='number' placeholder='Number' onChange={ (e) => handleChange(e, fieldsValues.number.regex) } legend='Invalid number address' isValid={form.number.isValid}/>
            <Input size='small' type='text' name='zipcode' placeholder='Zip code' autoComplete='off' onChange={ (e) => handleChange(e, fieldsValues.zipcode.regex) } legend='Invalid zip code' isValid={form.zipcode.isValid}/>
          </Form.Field.Body>
        </Form.Field>
        
        <Button size='small' color='danger' loading={ loading }>Sign in</Button>
      </form>

    {/* Links */}
      <Content size='small' display='flex' justifyContent='space-between' mt='3'>
        <Link to='/login'>I have an account</Link>
        <Link to='/'>Back to home</Link>
      </Content>
    </>
  );
};