import { useState } from 'react';
import { PhotoDetailsType } from '../app/home/home.types';

type UseFetchType = {
  response: PhotoDetailsType | null;
  isLoading: boolean;
  error: string | null;
  fetchData: (uri: string) => void;
};

const useFetch = (): UseFetchType => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (uri: string) => {
    setIsLoading(true);
    try {
      const res = await fetch(uri);
      const json = await res.json();
      setResponse(json);
      setIsLoading(false);
    } catch (err) {
      setError(err);
    }
  };

  return { fetchData, response, error, isLoading };
};

export default useFetch;
