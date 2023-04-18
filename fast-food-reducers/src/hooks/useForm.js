import toast from 'react-hot-toast';
import { useState } from "react";

export const useForm = (initialValues, successFunction) => {

    const [form, setForm] = useState(initialValues);

    const handleChange = (e, regexp) => {

        if(!regexp) {
            return setForm({
                ...form,
                [e.target.name]: { value: e.target.value, isValid: true }
            });
        }

        if(regexp.test(e.target.value)) {

            return setForm({
                ...form,
                [e.target.name]: { value: e.target.value, isValid: true }
            });

        } else {
            return setForm({
                ...form,
                [e.target.name]: { value: e.target.value, isValid: false }
            });
        }
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        const invalidFields = Object.values(form).filter(field => !field.isValid || !field.value);

        if(invalidFields.length === 0) {
            successFunction();
        } else {
            toast.error("Please fill in the form correctlly");
        }
    }

    const handleReset = (e) => { setForm(initialValues); }

    return {
        form,
        handleChange,
        handleSubmit,
        handleReset
    }
};