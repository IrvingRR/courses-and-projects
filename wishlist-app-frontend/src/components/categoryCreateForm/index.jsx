import { toast } from "react-hot-toast";
import { Fields, Form } from "../../global-styles-components";
import { Box, Button, Input, TextArea } from "../atoms";
import { useForm } from "../../hooks";
import { createCategoryService } from "../../services";
import { useContext } from "react";
import { SessionContext } from "../../contexts/SessionContext";
import { generateRandomColor } from "../../helpers/generateRandomColor";

export const CategoryCreateForm = ({ closeModal, setCategories }) => {

  const { session } = useContext(SessionContext);

  const fieldsValues = {
    category: {
      value: '',
      isValid: null,
      regexp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    },

    description: {
      value: '',
      isValid: true,
    },
  };

  const errorCallback = () => toast.error("Please fill in form correctlly");
  
  const successCallback = async () => {
    
    const data = {
      category: form.category.value,
      description: form.description.value,
      color: generateRandomColor()
    };

    const response = await createCategoryService(session.token, data);

    if(response.errors) {
      return response.errors.map(error => toast.error(error.msg));
    }

    toast.success(`Category created!`);

    setTimeout(() => {
      closeModal();
      setCategories((state) => [...state, response] );
    }, 1000);

  }

  const { form, handleChange, handleSubmit, handleReset } = useForm(fieldsValues, successCallback, errorCallback);

  return (
    <Form padding='0' maxWidth='100%' onSubmit={ handleSubmit }>
      <Fields>
        <Input type='text' name='category' placeholder='Category' legend='Category is required' onChange={ (e) => handleChange(e, fieldsValues.category.regexp) } value={ form.category.value } isValid={ form.category.isValid }/>
        <TextArea name='description' placeholder='Description' onChange={ handleChange } value={ form.description.value } isValid={ form.description.isValid }/>
      </Fields>
      <Box padding='0' display='flex' alignItems='center' gap='10px'>
        <Button>Create</Button>
        <Button type='reset' onClick={ handleReset } variant='outline primary'>Clear</Button>
      </Box>
    </Form>
  )
}
