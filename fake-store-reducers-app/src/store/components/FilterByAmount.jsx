import { Box, Button, Form } from 'react-bulma-components';
import { BiDollarCircle } from "react-icons/bi";
import { Input } from "../../ui/Input";
import { useState } from 'react';

const optionsFilter = ["All", "Greater than", "Less than", "Greater or equal than", "Less or equal than"];

export const FilterByAmount = ({ setResults, products }) => {

  const [amount, setAmount] = useState(0);
  const [filter, setFilter] = useState('');

  const handleFilterByAmount = (e) => {
    e.preventDefault();

    switch (filter) {
      case 'greater than':
        setResults(products.filter(product => product.price > amount));
        break;

      case 'less than':
        setResults(products.filter(product => product.price < amount));
        break;
  
      case 'greater or equal than':
        setResults(products.filter(product => product.price >= amount));
        break;

      case 'less or equal than':
        setResults(products.filter(product => product.price <= amount));
        break;
      
      default:
        setResults(products);
        break;
    }

    setAmount(0);
  }

  return (
    <form onSubmit={handleFilterByAmount}>
      <Box mt='2' display="flex" alignItems="center" style={{ gap: '10px' }}>
        <Input size='small' type='number' name='amount' placeholder='Amount'  alignIcon="left" sizeIcon="small" onChange={(e) => setAmount(e.target.value)} value={amount}/>
        <Form.Select size='small' onChange={(e) => setFilter(e.target.value)}>
          {/* <option selected disabled>Filter by amount</option> */}
          { optionsFilter.map((option, index) => <option key={`${option}-${index}`} value={option.toLowerCase()}>{option}</option> ) }
        </Form.Select>
        <Button size='small'>Filter</Button>
      </Box>
    </form>
  )
}
