import useForm from "../hooks/useForm";

const CreateForm = ({ createProduct }) => {

  const initialValues = {
    id: Math.random() * 9999,
    name: '',
    price: 0,
    lote: 0,
    url: '',
    category: ''
  }

  const successFunction = (e) => {
    createProduct(form)
    handleReset(e)
  }

  const { form, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);

  return (
    <form onSubmit={ handleSubmit }>
        <h2>Add product</h2>
        <div className="form-inputs">
            <input type="text" name='name' placeholder="Name" autoComplete="off" onChange={ handleChange } value={form.name}/>
            <input type="number" name='price' placeholder="Price" autoComplete="off" onChange={ handleChange } value={form.price}/>
            <input type="number" name='lote' placeholder="Lote" autoComplete="off" onChange={ handleChange } value={form.lote}/>
            <input type="text" name='url' placeholder="Image URL" autoComplete="off" onChange={ handleChange } value={form.url}/>
            <select name="category" onChange={ handleChange } value={ form.category }>
                <option disabled value=''>Select category</option>
                <option value="shoes">Shoes</option>
                <option value="glasses">Glasses</option>
                <option value="electronic">Electronic</option>
            </select>
        </div>
        <button>Create</button>
    </form>
  )
}

export default CreateForm;