import { useForm } from '../hooks/useForm';
import './form-cost.styles.css';

export const FormCost = ({ createCost }) => {

  const initialValues = {
    id: Math.random() * 1000,
    title: '',
    price: 0,
    description: ''
  }

  const successFunction = (e) => {
    createCost(form);
  }

  const { form, handleChange, handleSubmit } = useForm(initialValues, successFunction);

  return (
    <div className="container">
        <form className='form' onSubmit={ handleSubmit }>
        <h3 className='title-3'>Add cost</h3>
        <input className='input-control' type="text" name='title' placeholder='Title' autoComplete='off' onChange={ handleChange } value={ form.title }/>
        <input className='input-control' type="number" name='price' placeholder='Price' autoComplete='off' onChange={ handleChange } value={ form.price }/>
        <textarea className='textarea-control' name="description" placeholder='Description' onChange={ handleChange } value={ form.description }></textarea>
        <div>
            <button className='button'>Create</button>
        </div>
    </form>
    </div>
  )
}
