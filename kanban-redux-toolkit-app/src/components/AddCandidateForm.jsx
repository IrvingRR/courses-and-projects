import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Form, ButtonsGroup, Field, FieldLabel, Select } from "../styled";
import { Button, Input, InputTags } from "./";
import { useForm } from "../hooks";
import { createCandidateThunk } from "../store/slices/candidates/candidatesThunks";
import { useParams } from "react-router-dom";

export const AddCandidateForm = ({ handleCloseModal }) => {

  const [technologies, setTechnologies] = useState([]);
  const dispatch = useDispatch();
  const { id } = useParams();

  const initialValues = {
    name: '',
    role: '',
    image: '',
    status: '',
    job: null
  };

  const regularExpress = {
    title: /^[a-zA-ZÀ-ÿ-Z0-9\s\_\-\.]{1,40}$/,
    salary: /^\d{3,14}$/,
  }

  const successFunction = (e) => {
    
    const data = {...form, technologies, job: id};
    console.log('Form add candidate values:', data);

    dispatch(createCandidateThunk(data));
    handleCloseModal();

    setTechnologies([]);
    handleReset(e);
    toast.success('Candidate added!');

  }; 

  const { form, fieldsValidation, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Add candidate</h2>
        <Input type='text' name='name' label='Name:' legend='Invalid candidate name' onChange={(e) => handleChange(e)} isValid={fieldsValidation.name}/>
        <Input type='text' name='role' label='Role:' legend='Please into a valid role value' onChange={(e) => handleChange(e)} isValid={fieldsValidation.role}/>
        <Input type='text' name='image' label='Image candidate:' placeholder='Url image' onChange={(e) => handleChange(e)}/>
        <Field>
            <FieldLabel>Status:</FieldLabel>
            <Select name='status' onChange={(e) => handleChange(e)}>
                <option value="new">New</option>
                <option value="shortlisted">Shortlisted</option>
                <option value="interviewed">Interviewed</option>
            </Select>
        </Field>
        <InputTags type='text' name='technologies' placeholder='Technology name' label='Technologies requirement:' tags={technologies} setTags={setTechnologies}/>
        <ButtonsGroup>
          <Button>Add</Button>
          <Button type='button' variant='secondary' onClick={handleCloseModal}>Cancel</Button>
        </ButtonsGroup>
    </Form>
  )
}
