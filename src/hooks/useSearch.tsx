import { useEffect, useState } from "react";
import { Movie } from "../interfaces/UpcomingResult";
import { getSerieByName } from "../api/ApiService";
import Toast from "react-native-toast-message";

export const useSearch = () => {

  const [serieList, setSerieList] = useState<Movie[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [term, setTerm] = useState('');

  const showToastNotFound = () => {
    Toast.show({
      type: 'error',
      text1: 'TV Serie not found',
      autoHide: true,
      position: 'bottom',
      bottomOffset: 70
    });
  };

  useEffect(() => {
    if (notFound) {
      showToastNotFound();
    }
  }, [notFound]);

  useEffect(() => {
    let debounceTimeout = setTimeout(() => {
      searchSerie(term);
    }, 500);

    return () => clearTimeout(debounceTimeout);
  }, [term]);

  const searchSerie = async (value: string) => {
    setIsLoading(true);
    setNotFound(false);

    try {
      if (value.length >= 4) {
        const serieListResult = await getSerieByName(value);
        setSerieList(serieListResult);

        if (serieListResult.length === 0) {
          setNotFound(true);
        }
      } else {
        setSerieList([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    term,
    setTerm,
    isLoading,
    serieList,
    notFound
  }
}
