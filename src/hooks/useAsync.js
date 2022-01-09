import { useEffect, useState } from "react";

const useAsync = (asyncFunction) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    setStatus("pending");
    setError(null);
    setData(null);
    asyncFunction()
      .then((res) => {
        setData(res);
        setStatus("success");
        setError(null);
      })
      .catch((err) => {
        setStatus("error");
        setError(err);
        setData(null);
      });
  }, [asyncFunction]);


  return {
    data,
    error,
    isLoading:status==='pending',
    isSuccess:status==='success',
    isError:status==='error',
  };
};

export default useAsync;
