import { useState, useEffect } from "react";

type ValidUrl = {
  url: `https://${string}`;
};

export type quote = {
  quote: string;
  author: string;
};

export type Data = {
  quotes: quote[];
};

export default function useFetch({ url }: ValidUrl) {
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          const dataObj = result as Data;
          if (mounted) {
            setData(dataObj);
            setLoading(false);
          }
        })
        .catch((error: { message: string }) => {
          setError(error.message);
          setLoading(false);
        });
    };
    fetchData();

    return () => {
      !mounted;
    };
  }, [url]);

  return { data, loading, error };
}
