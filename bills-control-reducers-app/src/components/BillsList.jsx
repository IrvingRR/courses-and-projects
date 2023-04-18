import BillItem from "./BillItem";

const BillsList = ({ bills, onRemoveBill, onChangeAmount }) => {
  return (
    <ul className="list-group bills-list">
      {
        bills.length > 0
          ? bills.map(bill => <BillItem key={ bill.id } data={ bill } onRemoveBill={ onRemoveBill } onChangeAmount={ onChangeAmount }/>)
          : <p className="card p-3">No bills</p>
      }
    </ul>
  )
}

export default BillsList;