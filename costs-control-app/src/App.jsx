import { FormCost } from "./components";
import { ListCosts } from "./components/ListCosts";
import { useCosts } from "./hooks/useCosts";
import { useState } from 'react';

function App() {

  const { costs, createCost, deleteCost } = useCosts();
  const [budget, setBudget] = useState(0);

  return (
    <div className="App">
      <ListCosts costs={ costs } deleteCost={ deleteCost } budget={budget} setBudget={setBudget}/>
      <FormCost createCost={ createCost }/>
      <div className="container">
        <input type="number" name='budget' placeholder='budget' className="input-control" onChange={ (e) => setBudget(e.target.value) }/>
      </div>
    </div>
  )
}

export default App;
