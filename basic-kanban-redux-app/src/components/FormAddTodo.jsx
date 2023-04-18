import '../styles/form-add-todo.css';
import { createTodo } from '../store/slices/todosThunks';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export const FormAddTodo = () => {

  const dispatch = useDispatch();

  const initialValues = {
    title: '',
    description: '',
    status: 'pending'
  }

  const [form, setForm] = useState(initialValues);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createTodo(form));
    setForm(initialValues);
  }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add todo</h2>
        <input type="text" name='title' placeholder='Title' autoComplete='off' onChange={handleChange} value={form.title}/>
        <textarea name="description" placeholder='Description' onChange={handleChange} value={form.description}/>
        <select name="status" onChange={handleChange} value={form.status}>
            <option value="pending">Pending</option>
            <option value="doing">Doing</option>
            <option value="completed">Completed</option>
        </select>
        <button>Add</button>
    </form>
  )
}
