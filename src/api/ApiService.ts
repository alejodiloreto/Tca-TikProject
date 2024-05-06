import { Movie, UpcomingResult } from "../interfaces/UpcomingResult";
import { BASE_URL, X_RAPID_API_KEY } from '@env'

const url = `https://${BASE_URL}/titles`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': X_RAPID_API_KEY,
    'X-RapidAPI-Host': BASE_URL
  }
};

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${url}/x/upcoming?page=1`, options);

    if (!response.ok) {
      throw new Error(`Error en la llamada getUpcomingMovies: Status code ${response.status}`);
    }

    const movies: UpcomingResult = await response.json();
    return movies.results;
  } catch (error) {
    console.error('Error en la llamada a la API getUpcomingMovies:', error);
    throw error;
  }
}

export const getTopRatedSeries = async (): Promise<Movie[]> => {
  try {
    const response = await fetch(`${url}?list=top_rated_series_250&limit=50`, options);

    if (!response.ok) {
      throw new Error(`Error en la llamada getTopRatedSeries: Status code ${response.status}`);
    }

    const series: UpcomingResult = await response.json();
    return series.results;
  } catch (error) {
    console.error('Error en la llamada a la API getTopRatedSeries:', error);
    throw error;
  }
}