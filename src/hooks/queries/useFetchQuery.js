import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchQuery = (url, params = {}, options = {}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const queryClient = useQueryClient();

  const { data: queryData, error: queryError, isLoading: queryIsLoading, isPending, isSuccess } = useQuery({
    queryKey: [url, params], 
    queryFn: async () => {
      const response = await axios.get(url, {
        ...params,
      });

      if (response.status < 200 || response.status >= 300) {
        throw new Error(response.statusText);
      }

      return response.data;
    },
    ...options,
  });

  useEffect(() => {
    if (queryData) {
      setData(queryData);
    }
    if (queryError) {
      setError(queryError);
    }
    setIsLoading(queryIsLoading);
  }, [queryData, queryError, queryIsLoading]);

  return {
    data,
    error,
    isLoading,
    isPending,
    isSuccess,
    refetch: () => queryClient.refetchQueries([url, params]),
  };
};

export default useFetchQuery;
