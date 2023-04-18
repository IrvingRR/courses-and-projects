import { useEffect, useState } from "react"

export const useFetchAll = (promises = []) => {

    const [responses, setResponses] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchData = async () => {

            try {
                
                setIsLoading(true);

                const resultPromises = await Promise.all(promises);
                setResponses(resultPromises);


            } catch (error) {

                console.log(error);
                setError(error);
            
            } finally {
                setIsLoading(false);
            }             

        };

        fetchData();

    }, []);

    return {
        responses,
        isLoading,
        error
    }

}