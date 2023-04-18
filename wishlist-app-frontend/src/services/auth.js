const PATH = 'http://localhost:3000/api/v1/auth';

export const loginService = async (data) => {

    try {
        
        const request = await fetch(`${ PATH }/login`, {
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