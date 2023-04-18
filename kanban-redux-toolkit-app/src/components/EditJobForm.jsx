import { useState, useRef, useEffect } from "react";
import { Form, ButtonsGroup } from "../styled";
import { Button, TextArea, Input, InputTags } from "./";
import { useForm } from "../hooks";
import { useDispatch, useSelector } from "react-redux";
import { updateJobThunk } from "../store/slices/jobs";
import { toast } from "react-hot-toast";

export const EditJobForm = ({ handleCloseModal }) => {

    const dispatch = useDispatch();
    const { job } = useSelector(state => state.jobs);
    const [tags, setTags] = useState([]);

    useEffect(() => {
        setTags(job.tags);
    }, [job]);

    const regularExpress = {
        title: /^[a-zA-ZÀ-ÿ-Z0-9\s\_\-\.]{1,40}$/,
        salary: /^\d{3,14}$/,
    };

    const initialValues = {
        title: job.title,
        salary: job.salary,
        description: job.description
    };

    const successFunction = (e) => {
        const data = {...form, tags};
        console.log(data);
        // dispatch(updateJobThunk(job.id, data));
        // handleCloseModal();
        // toast.success('Job updated!');
    }

    const { form, fieldsValidation, handleChange, handleSubmit } = useForm(initialValues, successFunction);

    return (
        <Form onSubmit={handleSubmit}>
            <h2>Edit job</h2>
            <Input type='text' name='title' label='Title:' legend='Invalid title' value={form.title} onChange={(e) => handleChange(e, regularExpress.title)} isValid={fieldsValidation.title}/>
            <Input type='number' name='salary' label='Salary:' legend='Please into a valid salary value' value={form.salary} onChange={(e) => handleChange(e, regularExpress.salary)} isValid={fieldsValidation.salary}/>
            <InputTags type='text' name='technology' placeholder='Technology name' label='Technologies requirement:' tags={tags} setTags={setTags}/>
            <TextArea name='description' label='Description:' onChange={handleChange} value={form.description}/>
            <ButtonsGroup>
            <Button>Edit</Button>
            <Button type='button' variant='secondary' onClick={handleCloseModal}>Cancel</Button>
            </ButtonsGroup>
        </Form>
    )
}
