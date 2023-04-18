import AddBill from "./components/AddBill";
import BillsList from "./components/BillsList";
import { useBills } from "./hook/useBills";

function BillsControl() {

  const { bills, onAddBill, onRemoveBill, onChangeAmount } = useBills();

  return (
    <div className="container p-3">
      <h1>Bills control</h1>
      <hr />
      <div className="row">
        <div className="col-4">
          <AddBill onAddBill={ onAddBill }/>
        </div>
        <div className="col-7">
          <BillsList bills={ bills } onRemoveBill={ onRemoveBill } onChangeAmount={ onChangeAmount }/>
        </div>
      </div>
    </div>
  );
}

export default BillsControl;
