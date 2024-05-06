import { NavigationProp, useNavigation } from "@react-navigation/native";
import { Image, Platform, StyleSheet, TouchableOpacity, View } from "react-native"
import { RootStackParams } from "../navigation/StackNavigator";
import { Movie } from "../interfaces/UpcomingResult";

interface Props {
  movie: Movie;
}

export const MoviePoster = ({movie}: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailsScreen', 
      {
        id: movie.id, 
        image: movie.primaryImage?.url,
        title: movie.originalTitleText.text,
        titleType: movie.titleType.text,
        year: movie.releaseYear.year,
      }
    )}
      style={styles.pressable}
      activeOpacity={Platform.OS === 'android' ? .8 : .5}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: movie.primaryImage?.url }}
          resizeMode="cover"
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  pressable: {
    marginHorizontal: 8,
    paddingHorizontal: 8,
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    borderRadius: 18,
    width: 300,
    height: 400
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
