import { Book } from "@/components/sellerlisting";
import React, { use } from "react";

const useFetch = <T>(fetchFunction: () => Promise<any>, autoFetch: boolean = true) => {

    const [data, setData] = React.useState<any | null>(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);

    const fetchData = async () => {

        try {
            setLoading(true);
            setError(null);
            setData(await fetchFunction());

        }
        catch (e) {
            // @ts-ignore
            setError(e instanceof Error ? e : new Error(e));
        }
        finally {
            setLoading(false);
        }

    };

    const refresh = () => {
        setData(null);
        setLoading(false);
        setError(null);

    };
    React.useEffect(() => {
        if (autoFetch) {
            fetchData();
        }
    }, []);
    return {
        data,
        loading,
        error,
        refresh: fetchData,
        reset: refresh,
    }


};


export default useFetch;