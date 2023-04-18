import { useState } from "react";
import { TiZoomOutline, TiMediaRecordOutline, TiTimesOutline } from "react-icons/ti";
import { Input } from '../atoms';
import { Form, Button, Results, ResultItem } from './styles';

export const SearchForm = () => {

  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  return (
    <Form>
        <Input type='search' name='search' placeholder='Search' value={ search } onChange={ handleChange }/>
        <Button>
          <TiZoomOutline/>
        </Button>
        {
          search.length > 0 &&
            <Results>
              {
                results.length > 0
                ? <ResultItem>
                    <TiMediaRecordOutline/>
                    <p>Christmas wishlist</p>
                  </ResultItem>

                : <ResultItem>
                    <TiTimesOutline/>
                    <p>No results</p>
                  </ResultItem>
              }
            </Results>
        }
        
    </Form>
  )
}
