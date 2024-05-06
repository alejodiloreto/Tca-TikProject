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

export const imageNotFound = 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'

const fetchData = async (url: string): Promise<UpcomingResult> => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`Error en la llamada getUpcomingMovies: Status code ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error en la llamada a la API getUpcomingMovies:', error);
    throw error;
  }
}

export const getUpcomingMovies = async (): Promise<Movie[]> => {
  const data = await fetchData(`${url}/x/upcoming?page=1`);
  return data.results;
}

export const getTopRatedSeries = async (): Promise<Movie[]> => {
  const data = await fetchData(`${url}?list=top_rated_series_250&limit=50`);
  return data.results;
}

export const getSerieByName = async (value: string): Promise<Movie[]> => {
  const data = await fetchData(`${url}/search/title/${value}?exact=false&list=top_rated_series_250`);
  return data.results;
}