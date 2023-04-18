const PATH = 'http://localhost:3000/api/v1/users';

export const createUserService = async (data) => {

    try {
        
        const request = await fetch(PATH, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;

    } catch (error) {
        console.log(`[Error service] - ${error}`);
    }

};
