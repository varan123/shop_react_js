import { useEffect, useState } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        fetchData();
    }, [url]);

    return data;
};

export default useFetch;