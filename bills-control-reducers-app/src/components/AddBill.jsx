import { useForm } from "../hook/useForm";

const AddBill = ({ onAddBill }) => {

  const { form, onChange, onReset } = useForm({
    bill: '',
    amount: 1,
    cost: 0
  });

  const onSubmit = (e) => {
    e.preventDefault();

    if(!form.bill || !form.amount || !form.cost) return console.log('Please fill in the form correctlly');

    const newBill = {
      id: new Date().getTime() * Math.floor(Math.random() * 1000),
      bill: form.bill,
      amount: form.amount,
      cost: form.cost
    }

    onAddBill(newBill);
    onReset();
  }

  return (
    <form onSubmit={ onSubmit }>
        {/* <h4>New Bill</h4> */}
        <div className="form-group">
          <label htmlFor="bill">Bill:</label>
          <input type="text" name='bill' placeholder="Bill" autoComplete="off" onChange={ onChange } value={ form.bill }  className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input type="number" name='amount' placeholder="Amount" onChange={ onChange } value={ form.amount }  className="form-control mb-2"/>
        </div>
        <div className="form-group">
          <label htmlFor="cost">Cost:</label>
          <input type="number" name='cost' placeholder="Cost" onChange={ onChange } value={ form.cost }  className="form-control mb-2"/>
        </div>
        <button className="btn btn-primary">Add</button>
    </form>
  )
}

export default AddBill;