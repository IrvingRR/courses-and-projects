export const fetchHelper = async (url, options = {}) => {
    try {
        
        const request = await fetch(url, options);
        const response = await request.json();
        return response;

    } catch (error) {
        console.log(error);
    }
}