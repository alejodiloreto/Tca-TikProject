import { FlatList, StyleSheet, Text, View } from "react-native"
import { Movie } from "../interfaces/UpcomingResult"
import { Serie } from "./Serie"

interface Props {
  series: Movie[],
}

export const TopSeriesList = ({ series }: Props) => {

  return (
    <View style={styles.container} >
      <Text style={styles.text}>Top 250 Rated Series by IMDB</Text>
      <FlatList
        data={series}
        renderItem={({ item }) => <Serie serie={item} />}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    margin: 20,
    marginTop: 25,
    color: 'white'
  }
})