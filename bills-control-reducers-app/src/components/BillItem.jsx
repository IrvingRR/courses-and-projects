const BillItem = ({ data, onRemoveBill, onChangeAmount }) => {

  const { bill, cost, amount, id } = !!data && data;

  const handleChanage = (e) => {

    if(parseInt(e.target.value) <= 0) {
     onRemoveBill(id);
    } else {
      onChangeAmount(id, e.target.value);1
    }

  }

  return (
    <li className="list-group-item mb-2">
        <div className="d-flex justify-content-between align-items-center">
            <strong>{ bill }</strong>
            <p className="bill-tag">${ cost }</p>
        </div>
        <div className="d-flex align-items-end justify-content-between mb-3">
          <input type="number" name='amount' id="amount" placeholder="Amount" className="form-control" value={ amount } onChange={ handleChanage }/>
        </div>
        <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-danger" onClick={ () => onRemoveBill(id) }>Remove</button>
            <span className="text-primary">Subtotal: ${ cost * amount }</span>
        </div>
    </li>
  )
}

export default BillItem;