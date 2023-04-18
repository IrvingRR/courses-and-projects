import { Field, FieldLabel, Form, FormButtons, FormTitle, TextArea } from "../../styled";
import { Button, Input } from "../ui";
import { useForm } from '../../hooks';
import { useDispatch } from "react-redux";
import { startCreateClassThunk } from "../../redux/classes/classesThunks";

const initialForm = {
  name: { value: '', isValid: null },
  description: { value:'', isValid: true }
};

const regex = {
  name: /^[a-zA-ZÀ0-9-ÿ\s]{1,40}$/
}

export const CreateClassForm = ({ handleCloseModal }) => {

  const dispatch = useDispatch();

  const onCreateClass = (e) => {

    const data = {
      name: form.name.value,
      description: form.description.value
    };

    dispatch(startCreateClassThunk(data));
    
    handleCloseModal();
    handleReset(e);
  
  };

  const { form, handleChange, handleSubmit, handleReset } = useForm(initialForm, onCreateClass);

  return (
    <Form onSubmit={handleSubmit}>
        <FormTitle>Create class</FormTitle>
        <Input type='text' name='name' label='Name class' legend='Only letter and numbers with spaces' isValid={form.name.isValid} value={form.name.value} onChange={(e) => handleChange(e, regex.name)}/>
        <Field>
          <FieldLabel>Description:</FieldLabel>
          <TextArea name='description' label="Description" value={form.description.value} onChange={handleChange}/>
        </Field>
        <FormButtons>
            <Button>Create class</Button>
        </FormButtons>
    </Form>
  )
}
