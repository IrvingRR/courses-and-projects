import { Box, Form } from 'react-bulma-components';
import { Input } from "../../ui/Input";

const categories = ["Men's clothing", "Jewelery", "Electronics", "Women's clothing"];

export const SearchForm = ({ setCategory, setResults, products, setTitle }) => {
    
    const handleChangeCategory = (e) => {
        setCategory(e.target.value.toLowerCase());
        setTitle(e.target.value || 'All products');
    };

    const handleSearchProducts = (e) => {

        const search = e.target.value.toLowerCase();

        if(search) {
            setResults(products.filter(product => product.title.toLowerCase().startsWith(search)));
        } else {
            setResults(products);
        };

    };

    return (
        <form>
            <Box mt='2' mb='0' display="flex" alignItems="center" style={{ gap: '10px' }}>
                <Input size='small' type='text' name='search' placeholder='Search' alignIcon="left" sizeIcon="small" onChange={handleSearchProducts}/>
                <Form.Select onChange={handleChangeCategory} defaultValue={'all'} size='small'>
                {/* <option value="" selected disabled>Filter by category</option> */}
                <option value="">All</option>
                { categories.map((category, index) => <option key={`${category}-${index}`} value={category}>{ category }</option>) }
                </Form.Select>
            </Box>
        </form>
    );
}
