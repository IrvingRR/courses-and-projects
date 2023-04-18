import './list-costs.styles.css';
import { CostItem } from './CostItem';

export const ListCosts = ({ costs, deleteCost, budget }) => {

    // const total = costs.reduce((acc, current) => acc + parseInt(current.price), 0);
    // const budgetTotal = budget - total;

  return (
    <div className='container'>
        <h2 className='title-2'>List costs</h2>
        <div className="box">
            <div className="box">
                <p>Total:</p>
                {/* <span className="price">{ total }</span> */}
            </div>
            <div className="box">
                <p>Budget:</p>
                {/* <span className="price">{budgetTotal || 0}</span> */}
            </div>
            <div className="box">
                <p>Amount:</p>
                <span className="price">{costs.length}</span>
            </div>
        </div>
        <ul className='list'>
            {
                costs.length > 0
                ? costs.then(costs => costs.map(cost => <h3>{cost.title}</h3>))
                : <li className='message-item'>No costs yet</li>
            }
        </ul>
    </div>
  )
}
