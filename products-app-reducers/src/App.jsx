import CreateForm from "./components/createForm"
import TableProducts from "./components/TableProducts"
import Toast from './components/Toast'
import useProducts from "./hooks/useProducts"
import EditForm from "./components/EditForm"
import { useState } from "react"

function App() {

  const { products, createProduct, deleteProduct, editProduct } = useProducts()
  const [isEditing, setIsEditing] = useState(null);

  return (
    <div className="App">
      {/* <Toast title='Success' type='success' message='Product created'/> */}
      { isEditing ? <EditForm isEditing={isEditing} editProduct={editProduct} setIsEditing={setIsEditing}/> : <CreateForm createProduct={createProduct}/> }
      <TableProducts products={ products } deleteProduct={ deleteProduct } setIsEditing={setIsEditing}/>
    </div>
  )
}

export default App
