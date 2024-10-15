## English school

## Hooks

### useFetchQuery :

```
 const { data, error, isLoading, refetch } = useFetchQuery(
    'https://mi-api.com/endpoint',
    { param1: 'valor1', param2: 'valor2' },
    { enabled: true, retry: 3, staleTime: 10000 }
  );
```

handleSubmit(data).then(result)=> refetch()
### usePostPutMutation:

```
  const { result, error, isLoading, handleSubmit } = usePostPutMutation(
    'https://mi-api.com/endpoint',
    { nombre, edad },
    { method: 'POST' }
  );
```
