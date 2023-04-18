import { useParams } from "react-router-dom";
import { Box, Block, Heading, Message, Button, Icon } from "react-bulma-components";
import { Image, Product, ProductDetails, ProductImage } from "./ProductPage.styles";
import { BiPlus, BiMinus } from "react-icons/bi";
import { useEffect, useState } from "react";
import { getProductByIdService, getProductsService } from "../../api";
import { Products, Loader } from "../components";

export const ProductPage = () => {

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [relatedProducts, setRelatedProducts] = useState([]);

    useEffect(() => {

        const getData = async() => {

            setIsLoading(true);

            const productResponse = await getProductByIdService(id);
            const relatedProductsResponse = await getProductsService(productResponse.category);

            setProduct(productResponse);
            setRelatedProducts(relatedProductsResponse);
            
            setIsLoading(false);
            
        };

        getData();

    }, [id]);

    if(isLoading) return <Loader loading={'true'}/>

    return (
        <>
            <Box>
                <Heading renderAs="h2" size='4'>Product page</Heading>
            </Box>
            <Product display='flex' alignItems='center' justifyContent="center" flexWrap="wrap">
                {/* Image product */}
                <ProductImage display='flex' alignItems='center' justifyContent='center' >
                    <Image src={product.image} alt={product.title}/> 
                </ProductImage>
                {/* Details product and actions */}
                <ProductDetails  p='5' display="flex" flexDirection="column">
                    <Heading renderAs="h2">{product.title}</Heading>
                    <Heading renderAs="h3" size='4' weight="normal">${product.price}</Heading>
                    <Message size='small' p='2' style={{ width: '100%', maxWidth: '100px' }} textWeight='bold' textAlign='center'>{product.category}</Message>
                    <Block>
                        <p>{product.description}</p>
                    </Block>
                    <Block display='flex' alignItems="center" pt='2' style={{ gap: '10px' }}>
                        <Button size='small'>
                            <Icon>
                                <BiPlus/>
                            </Icon>
                        </Button>
                            <Heading renderAs="h3" size='6' mb='0'>1</Heading>
                        <Button size='small'>
                            <Icon>
                                <BiMinus/>
                            </Icon>
                        </Button>
                    </Block>
                    <Block>
                        <Button size='small' color='danger'>Add to cart</Button>
                    </Block>
                </ProductDetails>
            </Product>
            <Products products={relatedProducts} isLoading={isLoading}/>
        </>
    )
};