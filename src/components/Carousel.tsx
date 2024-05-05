import { ScrollView, View } from "react-native"
import { Movie } from "../interfaces/UpcomingResult"
import { MoviePoster } from "./MoviePoster"

interface Props {
  movies: Movie[]
}

export const Carousel = ({ movies }: Props) => {

  return (
    <View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {movies.map(movie => <MoviePoster key={movie.id} movie={movie} />)}
      </ScrollView>
    </View>
  )
}