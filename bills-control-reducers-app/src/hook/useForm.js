import { useState } from "react";

export const useForm = (initialValues) => {

    const [form, setForm] = useState(initialValues);

    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const onReset = () => setForm(initialValues);

    return { form, onChange, onReset }

};