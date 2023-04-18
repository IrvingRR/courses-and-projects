import { useState } from "react"

const useForm = (initialValues, successFunction) => {

    const [form, setForm] = useState(initialValues);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const invalidFields = Object.values(form).filter(field => !field);

        if(invalidFields.length === 0) {
            successFunction(e)
        } else {
            alert('Please fill in form correctlly');
        }
    }

    const handleReset = (e) => {
        e.target.reset();
        setForm(initialValues)
    }

    return {
        form,
        handleChange,
        handleSubmit,
        handleReset
    }
}

export default useForm