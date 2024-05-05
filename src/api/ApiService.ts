import { Movie, UpcomingResult } from "../interfaces/UpcomingResult";
import {BASE_URL, X_RAPID_API_KEY} from '@env'

export const getUpcomingMovies = async (): Promise<Movie[]> => {

  const url = `https://${BASE_URL}/titles/x/upcoming`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': X_RAPID_API_KEY,
      'X-RapidAPI-Host': BASE_URL
    }
  };

  try {
    const response = await fetch(url, options);

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
