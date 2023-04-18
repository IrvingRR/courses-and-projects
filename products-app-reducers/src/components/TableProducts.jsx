import ProductItem from "./ProductItem";

const TableProducts = ({ products, deleteProduct, setIsEditing }) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Image</th>
                <th>Name</th>
                <th>category</th>
                <th>Price</th>
                <th>Lote</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                products.length > 0
                ?   products.map(product => <ProductItem key={ product.id } data={product} deleteProduct={deleteProduct} setIsEditing={setIsEditing}/>)
                :   <tr>
                        <td>No products</td>
                    </tr>
            }
            
        </tbody>
    </table>
  )
}

export default TableProducts;