import { Header } from "./StorePage.styles";
import { Block, Box, Heading } from "react-bulma-components";  
import { Products, SearchForm } from '../components';
import { getProductsService } from "../../api";
import { useState, useEffect } from 'react';
import { FilterByAmount } from "../components/FilterByAmount";

export const StorePage = () => {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('');
  const [results, setResults] = useState([]);
  const [title, setTitle] = useState('All products');

  useEffect(() => {

    const getProducts = async () => {
      
      setIsLoading(true);

      const data = await getProductsService(category);
      setProducts(data);
      setResults(data);

      setIsLoading(false);

    }
    
    getProducts();

  }, [category]);

  return (
    <>
      <Box>
        <Heading size='4' renderAs="h2">{title}</Heading>
        <Heading subtitle size='6'>Discover whatever you need easly</Heading>
      </Box>
      <Block display="flex" alignItems="center" style={{ gap: '10px' }} justifyContent='space-between'>
          <SearchForm setCategory={setCategory} setResults={setResults} products={products} setTitle={setTitle}/>
          <FilterByAmount setResults={setResults} products={products}/>
      </Block>
      <Products products={results} isLoading={isLoading}/>
    </>
  );
};