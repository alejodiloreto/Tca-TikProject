import { useState, useEffect } from 'react';
import { Movie } from "../interfaces/UpcomingResult";
import { getUpcomingMovies } from '../api/ApiService';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, [])

  const initialLoad = async () => {
    try {
      const data = await getUpcomingMovies();
      setUpcomingMovies(data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    upcomingMovies
  }
}
