import { useState } from "react"

export const useForm = (initialValues, succesFunction) => {

    const [form, setForm] = useState(initialValues);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        succesFunction();
        setForm(initialValues)
    }

    return {
        form,
        handleChange,
        handleSubmit
    }

}