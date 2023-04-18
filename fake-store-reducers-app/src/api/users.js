const URL = 'https://fakestoreapi.com/users';

export const createUserService = async (data) => {
    try {
        const request = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();
        return response;

    } catch (error) {
        throw error
    }
};

export const getUserById = async (id) => {
    try {
        const request = await fetch(`${URL}/${id}`);

        const response = await request.json();
        return response;

    } catch (error) {
        throw error
    }
};