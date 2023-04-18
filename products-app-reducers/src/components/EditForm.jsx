import useForm from "../hooks/useForm";

const EditForm = ({ isEditing, setIsEditing, editProduct }) => {

  const initialValues = {
    id: isEditing?.id,
    name: isEditing?.name,
    price: isEditing?.price,
    lote: isEditing?.lote,
    url: isEditing?.url,
    category: isEditing?.category
  }

  const successFunction = (e) => {
    editProduct(initialValues.id, form );
    setIsEditing(null)
  }

  const { form, handleChange, handleSubmit, handleReset } = useForm(initialValues, successFunction);


  return (
    <form onSubmit={ handleSubmit }>
        <h2>Edit product</h2>
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
        <div className="form-buttons">
          <button>Edit</button>
          <button onClick={() => setIsEditing(null)}>Cancel</button>
        </div>
    </form>
  )
}

export default EditForm;