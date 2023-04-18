import { Form } from '../styled';
import { Input, Button } from './';
import { useForm } from '../hooks';
import { fetchHelper } from '../helpers';
import { useContext } from 'react';
import { BoardContext } from '../context';

export const FormCreateBoard = ({ handleCloseModal }) => {

  const { createBoard } = useContext(BoardContext);

  const initialValues = {
    title: {
      value: '',
      isValid: null,
      expression: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
    }
  };

  const successFunction = async () => {
    const data = {
      title: form.title.value,
      columns: ["Todo", "Doing", "Done"],
      tasks: []
    };

    const response = await fetchHelper('http://localhost:5000/boards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    createBoard(response);
    handleCloseModal();
  }

  const { form, handleChange, handleSubmit } = useForm(initialValues, successFunction);

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Create board</h2>
      <Input type='text' name='title' placeholder='Team work' label='Title' legend='Invalid title' isValid={form.title.isValid} onChange={(e) => handleChange(e, initialValues.title.expression)}/>
      <Button rounded>Create</Button>
    </Form>
  )
}
