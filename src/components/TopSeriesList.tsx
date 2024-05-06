import { FlatList, StyleSheet, Text, View } from "react-native"
import { Movie } from "../interfaces/UpcomingResult"
import { Serie } from "./Serie"

interface Props {
  series: Movie[],
}

export const TopSeriesList = ({ series }: Props) => {

  return (
    <View style={styles.container} >
      <Text style={styles.text}>Top 50 Rated Series by IMDB</Text>
      {series.map(serie => <Serie key={serie.id} serie={serie} />)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    margin: 20,
    marginTop: 25,
    color: 'white'
  }
})