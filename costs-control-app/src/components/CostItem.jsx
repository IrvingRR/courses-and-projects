import './cost-item.styles.css';

export const CostItem = ({ data, deleteCost }) => {
  return (
    <li className="list-item">
        <div className="box">
            <p className='title'>{data.title}</p>
            <span className="price">${data.price}.00</span>
        </div>
        <div className="box">
            <button className="button button-danger" onClick={ () => deleteCost(data.id) }>Eliminar</button>
        </div>
    </li>
  )
}
