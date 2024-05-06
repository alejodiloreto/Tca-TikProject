import { useState, useEffect } from 'react';
import { Movie } from "../interfaces/UpcomingResult";
import { getTopRatedSeries, getUpcomingMovies } from '../api/ApiService';

export const useMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topSeries, setTopSeries] = useState<Movie[]>([]);

  useEffect(() => {
    initialLoad();
  }, [])

  const initialLoad = async () => {
    try {
      const upcomingMoviesData = await getUpcomingMovies();
      setUpcomingMovies(upcomingMoviesData);

      const topSeriesData = await getTopRatedSeries();
      setTopSeries(topSeriesData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    upcomingMovies,
    topSeries
  }
}
