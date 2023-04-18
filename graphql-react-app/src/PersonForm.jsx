import { gql, useMutation } from "@apollo/client"
import { useState } from "react";
import { ALL_PERSONS } from "./App";

const CREATE_PERSON = gql`
    mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String!){
        addPerson(name: $name, phone: $phone, street: $street, city: $city) {
            id
            name
            phone
            address{
                street
                city
            }
        } 
    }

`;

const PersonForm = () => {

    const initialForm = {
        name: '',
        phone: '',
        street: '',
        city: ''
    }

    const [form, setForm] = useState(initialForm);
    const [ createPerson ] = useMutation(CREATE_PERSON, {
        refetchQueries: [ { query: ALL_PERSONS } ]
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        createPerson({ 
            variables: { 
                name: form.name, 
                phone: form.phone,
                street: form.street,
                city: form.city
            } 
        });

        setForm(initialForm);
    }

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value});

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} />
        <input type="text" name="phone" placeholder="phone" value={form.phone} onChange={handleChange} />
        <input type="text" name="street" placeholder="Street" value={form.street} onChange={handleChange} />
        <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} />
        <button>Add person</button>
    </form>
  )
}

export default PersonForm