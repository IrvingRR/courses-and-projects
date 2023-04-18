const URL = 'https://fakestoreapi.com/products';

export const getProductsService = async (category) => {

    let url = category ? `https://fakestoreapi.com/products/category/${category}` : 'https://fakestoreapi.com/products';
    
    try {
        const request = await fetch(url);

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const getProductByIdService = async (id) => {
    
    try {
        const request = await fetch(`${URL}/${id}`);

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
        throw error;
    }
};