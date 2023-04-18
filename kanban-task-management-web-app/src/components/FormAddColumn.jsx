import { Form } from '../styled';
import { Input, Button } from './';
import { useForm } from '../hooks';
import { fetchHelper } from '../helpers';
import { useContext } from 'react';
import { BoardContext } from '../context';

export const FormAddColumn = ({ handleCloseModal }) => {

    const { boardState, addColumn } = useContext(BoardContext);
    const currentColumns = boardState.board.columns;

    const initialValues = {
        column: {
          value: '',
          isValid: null,
          expression: /^[a-zA-ZÀ-ÿ\s]{1,40}$/
        }
      };
    
    const successFunction = async (e) => {
      const data = {
        ...boardState.board,  
        columns: [...currentColumns, form.column.value],
      };
  
      await fetchHelper(`http://localhost:5000/boards/${boardState.board.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });


      addColumn(form.column.value);
      handleCloseModal();
      handleReset(e);
    }
  
    const { form, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);

    return (
      <Form onSubmit={handleSubmit}>
        <h2>Add column</h2>
        <Input type='text' name='column' label='Column' legend='Invalid column' isValid={form.column.isValid} onChange={(e) => handleChange(e, initialValues.column.expression)} value={form.column.value}/>
        <Button rounded>Add</Button>
      </Form>
  )
}
