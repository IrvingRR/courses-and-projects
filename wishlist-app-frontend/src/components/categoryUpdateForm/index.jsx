import { Fields, Form } from "../../global-styles-components";
import { Box, Button, Input, TextArea } from "../atoms";
import { Loader } from '../loader';
import { useForm } from '../../hooks';
import { toast } from "react-hot-toast";
import { useState } from "react";

export const CategoryUpdateForm = ({ categoryData }) => {

    const [isLoading, setIsLoading] = useState(false);
    
    const { category, description } = categoryData;

    const fields = {
        category: {
            value: category,
            isValid: null,
            regexp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        },

        description: {
            value: description,
            isValid: true
        }
    };


    const { form, handleChange, handleSubmit } = useForm(fields);  

    return (
    <>
        {
            isLoading
                ? <Loader/>
                : <Form padding='0' maxWidth='100%'>
                    <Fields>
                    <Input type='text' name='category' placeholder='Category' legend='Category is required' onChange={ (e) => handleChange(e, form.category.regexp) } isValid={ form.category.isValid } defaultValue={ fields.category.value }/>
                    <TextArea name='description' placeholder='Description' onChange={ handleChange }/>
                    </Fields>
                    <Box padding='0' display='flex' alignItems='center' gap='10px'>
                    <Button>Update</Button>
                    </Box>
                </Form>
        }
    </>
  )
}
