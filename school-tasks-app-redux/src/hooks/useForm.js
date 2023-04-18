import { useState } from "react";
import { toast } from "react-hot-toast";

export const useForm = (initialState = {}, successFunction) => {

    const [form, setForm] = useState(initialState);

    const handleChange = (e, regExpress) => {
        
        if(!regExpress) {
           return setForm({
                ...form,
                [e.target.name]: {  value: e.target.value, isValid: true  }
            });
        }

        if(regExpress.test(e.target.value)) {
           return setForm({
                ...form,
                [e.target.name]: {  value: e.target.value, isValid: true  }
            });

        } else {
            return setForm({
                ...form,
                [e.target.name]: {  value: e.target.value, isValid: false  }
            });
        }

    };

    const handleSubmit = (e) => {
        
        e.preventDefault();

        const invalidInputs = Object.values(form).filter(field => !field.isValid);
        
        if(invalidInputs.length > 0) {
            return toast.error('Please fill in the form correctlly');
        };

        successFunction(e);
    };

    const handleReset = (e) => {
        e.target.reset();
        setForm(initialState);
    };

    return {
        ...form,
        form,
        handleChange,
        handleSubmit,
        handleReset,
    };

};