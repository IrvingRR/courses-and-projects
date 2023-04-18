import { gql, useQuery } from "@apollo/client";
import Persons from './Persons';

export const ALL_PERSONS = gql`

  query {
    allPersons{
      id
      name
      phone
      address{
        city
        street
      }
    }
  }

`;

function App() {

const { data, loanding, error } = useQuery(ALL_PERSONS);

  if(error) return <strong>Ops, it occurred an error: {error}</strong>

  return (
    <div className="App">
      {loanding
        ? <h3>Loanding...</h3>
        : data && <Persons persons={data.allPersons}/>
      }
      <h3>App with GraphQL</h3>
    </div>
  );
}

export default App;
