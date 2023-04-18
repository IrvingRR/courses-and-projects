const PATH = 'http://localhost:3005/costs';

export const getCostsService = async () => {
    try {
        
        const request = await fetch(PATH);
        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }
}

export const createCostService = async (data) => {
    try {
        
        const request = await fetch(PATH, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }
}