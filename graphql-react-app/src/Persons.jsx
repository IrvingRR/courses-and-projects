import { gql, useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import PersonForm from "./PersonForm";

const FIND_PERSON = gql`
    query findPersonByName($nameToSearch: String!) {
      findPerson(name: $nameToSearch) {
        name
        phone
        id
        address {
          street
          city
        }
      }
    }
`;

const Persons = ({persons}) => {

  const [getPerson, result] = useLazyQuery(FIND_PERSON);
  const [person, setPerson] = useState(null);

  const showPerson = (name) => {
    getPerson({ variables: { nameToSearch: name } });
  }

  useEffect(() => {
    if(result.data) {
      setPerson(result.data.findPerson);
    }
  }, [result]);

  if(person) {
    return (
      <div>
        <strong>{person.name}</strong>
        <p>{person.phone}</p>
        <p>{person.address.city}</p>
        <p>{person.address.street}</p>
        <button onClick={ () => setPerson(null) }>Close</button>
      </div>
    );
  }

  if(persons === null) return null;

  return (
    <div>
        <p>Persons</p>
        {persons.map(person => <div key={person.id} onClick={ () => showPerson(person.name) }>{person.name}</div>)}
        <PersonForm/>
    </div>
  )
}

export default Persons;