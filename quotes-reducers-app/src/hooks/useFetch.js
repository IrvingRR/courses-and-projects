import { useState, useEffect } from "react";

export const useFetch = (url, dependencies = []) => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {
            
            try {
                
                setIsLoading(true);

                const request = await fetch(url);
                const result = await request.json();

                setResponse(result);

            } catch (error) {

                console.log(error);
                setError(`Ops, it occurred an error: ${error}`);
            
            } finally {
                setIsLoading(false);
            }

        }

        fetchData();

    }, dependencies);

    
    return {
        response,
        isLoading,
        error
    }
}