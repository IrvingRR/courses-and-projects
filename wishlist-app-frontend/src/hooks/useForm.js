import { useState } from 'react';

export const useForm = (initialValues, successCallback, errorCallback) => {

    const [form, setForm] = useState(initialValues);

    const handleChange = (e, regexp) => {

        if(!regexp) {
           return setForm({
                ...form,
                [e.target.name]: {
                    value: e.target.value,
                    isValid: true
                }
            });
        }

        if(regexp.test(e.target.value)) {
            setForm({
                ...form,
                [e.target.name]: {
                    value: e.target.value,
                    isValid: true
                }
            });
        } else {
            setForm({
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
            errorCallback();
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