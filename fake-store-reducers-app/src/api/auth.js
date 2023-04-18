export const loginService = async (data) => {
    try {
        const request = await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        console.log(response);
        return response;

    } catch (error) {
        throw error
    }
};