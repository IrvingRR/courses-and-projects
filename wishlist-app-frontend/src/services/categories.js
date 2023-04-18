const PATH = 'http://localhost:3000/api/v1/categories';

export const getCategoriesService = async (token) => {

    try {
        
        const request = await fetch(PATH, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-token': token
            },
        });

        const response = await request.json();
        return response.response;

    } catch (error) {
        console.log(`[Error service] - ${error}`);
    }

};

export const getCategoryService = async (token, id) => {

    try {
        
        const request = await fetch(`${PATH}/${id}`, {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                'x-token': token
            },
        });

        const response = await request.json();
        return response.response;

    } catch (error) {
        console.log(`[Error service] - ${error}`);
    }

};

export const createCategoryService = async (token, data) => {
    
    try {
        
        const request = await fetch(PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    
        const response = await request.json()
        return response.response;

    } catch (error) {
        console.log(`[Error service] - ${error}`)
    }
}

export const updateCategoryService = async (token, data) => {
    
    try {
        
        const request = await fetch(PATH, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify(data)
        });
    
        const response = await request.json()
        return response.response;

    } catch (error) {
        console.log(`[Error service] - ${error}`)
    }
}