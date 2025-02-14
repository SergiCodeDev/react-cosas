// fetch donde se puede interrupir la peticion
import { useEffect, useState } from "react";

type Data<T> = T | null;
type ErrorType = Error | null;

interface Params<T> {
  data: Data<T>;
  loading: boolean;
  error: ErrorType;
}

export const useFetch = <T>(url: string): Params<T> => {
  const [data, setData] = useState<Data<T>>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<ErrorType>(null)

  useEffect(() => {
    const controller = new AbortController(); // con esto puedes abortar la peticion del fetch

    setLoading(true)

    const fetchData = async () => {
      try {
        const response = await fetch(url, controller); // le pasamos el AbortController

        if (!response.ok) {
          throw new Error("Error en la petición")
        }

        const jsonData: T = await response.json();

        setData(jsonData)
        setError(null);
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }

    fetchData();

    return () => {
      controller.abort(); // aquí abortamos
    }

  }, [url])

  return { data, loading, error } // devolbemos 
}

// const url = ""
// interface Data {
//     nombre: string
//     apellido:string
//     age: number
// }
// fn ...
// const { data, loading, error } = useFetch<Data>(url)
// ... usar los data, loading, error.message