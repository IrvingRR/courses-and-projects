const ENDPOINT = 'http://localhost:5000/users';

export const createUserService = async (data) => {
    
    try {

        const request = await fetch(`${ENDPOINT}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }

}