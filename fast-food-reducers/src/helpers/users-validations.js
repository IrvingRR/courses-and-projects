const ENDPOINT = 'http://localhost:5000/users';

export const validateEmail = async (email) => {

    try {
        const request = await fetch(`${ENDPOINT}/${email}`);
        const response = await request.json();
        return response;
    } catch (error) {
        console.log(error);
    }

}