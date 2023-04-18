import React from 'react'

const ProductItem = ({ data, deleteProduct, setIsEditing }) => {
  return (
    <tr>
        <td>
            <img src={ data.url } alt="" />
        </td>
        <td>{ data.name }</td>
        <td>{ data.category }</td>
        <td>${data.price}</td>
        <td>{ data.lote }</td>
        <td className="td-actions">
            <button onClick={() => setIsEditing(data)}>Edit</button>
            <button onClick={() => deleteProduct(data.id)} className="button-delete">Delete</button>
        </td>
    </tr>
  )
}

export default ProductItem