import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const useForm = (initialValues, successCallback) => {

    const [form, setForm] = useState(initialValues);
    const [fieldsValidation, setFieldsValidation] = useState({});

    const handleChange = (e, regExpress) => {

        if(!regExpress) {

           setForm({
                ...form,
                [e.target.name]: e.target.value
            });

            setFieldsValidation({
                ...fieldsValidation,
                [e.target.name]: true
            });
            
        }

        if(regExpress) {

            if(regExpress.test(e.target.value)) {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
    
                setFieldsValidation({
                    ...fieldsValidation,
                    [e.target.name]: true
                });
            } else {
                setForm({
                    ...form,
                    [e.target.name]: e.target.value
                });
    
                setFieldsValidation({
                    ...fieldsValidation,
                    [e.target.name]: false
                });
            }
            
        } 

    };

    const handleSubmit = (e) => {

        e.preventDefault();

        const invalidFields = Object.values(fieldsValidation).filter(field => !field);
        console.log(fieldsValidation);

        if(invalidFields.length === 0) {
            successCallback(e);
        } else {
            toast.error('Please fill in the form correctlly');
        };
        
    };

    const handleReset = (e) => {
        setForm(initialValues);
        e.target.reset();
    };

    return {
        form, 
        handleChange,
        handleSubmit,
        handleReset,
        fieldsValidation
    };

};