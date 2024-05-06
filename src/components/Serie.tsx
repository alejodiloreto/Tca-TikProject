import { Image, StyleSheet, Text, View, } from "react-native"
import { Movie } from "../interfaces/UpcomingResult"
import { TouchableOpacity } from "react-native-gesture-handler"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParams } from "../navigation/Navigation"

interface Props {
  serie: Movie
}

export const Serie = ({ serie }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', 
      {
        id: serie.id,
        image: serie.primaryImage?.url,
        title: serie.originalTitleText.text,
        titleType: serie.titleType.text,
        year: serie.releaseYear.year,
        endYear: serie.releaseYear.endYear,
        position: serie.position
      }
    )}
      style={styles.pressable}
    >
      <Image
        style={styles.image}
        source={{ uri: serie.primaryImage?.url }}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.text}>{serie.originalTitleText.text}</Text>
        <Text style={styles.text}>{serie.titleType.text}</Text>
        <Text style={styles.text}>{serie.releaseYear.year} - {serie.releaseYear.endYear}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pressable: {
    flex: 1,
    height: 130,
    width: 350,
    backgroundColor: '#DDD',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  text: {
    maxWidth: 240,
    fontSize: 18,
    marginLeft: 15,
    marginTop: 8
  },
  image: {
    borderRadius: 8,
    width: 70,
    height: 100,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 10
  },
})