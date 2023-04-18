import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Form, ButtonsGroup } from "../styled";
import { Button, TextArea, Input, InputTags } from "./";
import { useForm } from "../hooks";
import { createJobThunk } from "../store/slices/jobs";

export const AddJobForm = ({ handleCloseModal }) => {

  const [tags, setTags] = useState([]);
  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    salary: 0,
    description: ''
  };

  const regularExpress = {
    title: /^[a-zA-ZÀ-ÿ-Z0-9\s\_\-\.]{1,40}$/,
    salary: /^\d{3,14}$/,
  }

  const successFunction = (e) => {
    
    const data = {...form, tags};
    console.log('Form add values:', data);

    dispatch(createJobThunk(data));
    handleCloseModal();

    setTags([]);
    handleReset(e);
    toast.success('Job created!');

  }; 

  const { form, fieldsValidation, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);

  return (
    <Form onSubmit={handleSubmit}>
        <h2>Add job</h2>
        <Input type='text' name='title' label='Title:' legend='Invalid title' onChange={(e) => handleChange(e, regularExpress.title)} isValid={fieldsValidation.title}/>
        <Input type='number' name='salary' label='Salary:' legend='Please into a valid salary value' onChange={(e) => handleChange(e, regularExpress.salary)} isValid={fieldsValidation.salary} defaultValue={0}/>
        <InputTags type='text' name='technology' placeholder='Technology name' label='Technologies requirement:' tags={tags} setTags={setTags}/>
        <TextArea name='description' label='Description:' onChange={handleChange}/>
        <ButtonsGroup>
          <Button>Add</Button>
          <Button type='button' variant='secondary' onClick={handleCloseModal}>Cancel</Button>
        </ButtonsGroup>
    </Form>
  )
}
