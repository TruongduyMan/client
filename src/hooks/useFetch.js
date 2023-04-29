import { useEffect, useState } from "react";
import { makeRequest } from "../../../makeRequest";

const useFetch = (url) =>{
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() =>{
        const fetchData = async() =>{setLoading(true)
            try {
                const res = await makeRequest.get(url, {
                })
                setData(res.data.data);
                
            } catch (error) {
                setLoading(false);
                setError(error);

            }
            setLoading(false);

        }
        fetchData();
    }, [url]);
    
    return {loading, error, data}
}

export default useFetch;