import { Image, StyleSheet, Text, View, } from "react-native"
import { Movie } from "../interfaces/UpcomingResult"
import { TouchableOpacity } from "react-native-gesture-handler"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { RootStackParams } from "../navigation/StackNavigator"
import { imageNotFound } from "../api/ApiService"

interface Props {
  serie: Movie
}

export const Serie = ({ serie }: Props) => {

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const onPressSerie = () => {
    navigation.navigate('DetailsScreen', {
      id: serie.id,
      image: serie.primaryImage?.url,
      title: serie.originalTitleText.text,
      titleType: serie.titleType.text,
      year: serie.releaseYear.year,
      endYear: serie.releaseYear.endYear,
      position: serie.position
    });
  };

  return (
    <TouchableOpacity
      onPress={onPressSerie}
      style={styles.pressable}
    >
      <Image
        style={styles.image}
        source={{ uri: serie.primaryImage?.url || imageNotFound }}
        resizeMode="contain"
      />
      <View>
        <Text style={styles.text}>{serie.originalTitleText.text}</Text>
        <Text style={styles.text}>{serie.titleType.text}</Text>
        <Text style={styles.text}>
          {(serie.releaseYear.endYear) ? `${serie.releaseYear.year} - ${serie.releaseYear.endYear!}` : serie.releaseYear.year}
        </Text>
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
    paddingLeft: 25,
    marginLeft: 20,
    marginBottom: 20,
    borderRadius: 10
  },
  text: {
    maxWidth: 230,
    fontSize: 18,
    marginLeft: 15,
    marginTop: 8,
    color: 'black'
  },
  image: {
    borderRadius: 8,
    width: 70,
    height: 100,
  }
})