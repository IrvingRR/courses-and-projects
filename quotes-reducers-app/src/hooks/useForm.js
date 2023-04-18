import { useState } from 'react';
import { toast } from 'react-hot-toast';

export const useForm = (initialValues, successCallback) => {

    const [form, setForm] = useState(initialValues);

    const handleChange = (e, regExpress) => {

        if(!regExpress) {
           return setForm({
                ...form,
                [e.target.name]: {
                    value: e.target.value,
                    isValid: true
                }
            });
        }

        if(regExpress && regExpress.test(e.target.value)) {
            return setForm({
                ...form,
                [e.target.name]: {
                    value: e.target.value,
                    isValid: true
                }
            });
            
        } else {
            return setForm({
                ...form,
                [e.target.name]: {
                    value: e.target.value,
                    isValid: false
                }
            });
        }

    };

    const handleSubmit = (e) => {

        e.preventDefault();
        
        const inValidFields = Object.values(form).filter(field => !field.isValid);

        if(inValidFields.length === 0) {
            successCallback();
        } else {
            toast.error('Please fill in the form correctlly');
        };
        
    };

    const handleReset = (e) => setForm(initialValues);

    return {
        form, 
        handleChange,
        handleSubmit,
        handleReset
    };

};