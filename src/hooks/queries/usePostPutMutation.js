import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const usePostPutMutation = (urlFn, options = {}) => {
  const queryClient = useQueryClient();
  let url;

  const fetch = async ({ data, exerciseId }) => {
    url = typeof urlFn === 'function' ? urlFn(exerciseId) : urlFn;
    const response = await axios({
      url,
      method: options.method || 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      data,
    });

    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }

    return response.data;
  };

  const {
    mutate: mutateFunction,
    data: result,
    error,
    isLoading,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: fetch,
    onSuccess: () => {
      queryClient.invalidateQueries(url);
    },
    ...options,
  });

  // Wrapper para mantener la firma original de mutate
  const mutate = (params) => mutateFunction(params);

  return {
    mutate,
    result,
    error,
    isLoading,
    isSuccess,
    isPending,
  };
};