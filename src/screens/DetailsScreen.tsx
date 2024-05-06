import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from "react-native"
import { FullScreenLoader } from "../components/FullScreenLoader"
import { useMovies } from "../hooks/useMovies";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../navigation/StackNavigator";
import { useNavigation } from "@react-navigation/native";
import { imageNotFound } from "../api/ApiService";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends StackScreenProps<RootStackParams, 'DetailsScreen'> { };

export const DetailsScreen = ({ route }: Props) => {

  const { height: screenHeight } = useWindowDimensions()
  const { isLoading } = useMovies();
  const { image, title, titleType, year, endYear, position } = route.params;
  const navigation = useNavigation();

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name='arrow-back-circle' color='white' size={40} style={styles.backButton} />
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.imageContainer, height: screenHeight * .7 }}>
        <View style={styles.imageBorder} >
          <Image
            style={styles.posterImage}
            source={{ uri: image ? image : imageNotFound }}
          />
        </View>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={{ marginHorizontal: 20 }}>
        <Text style={styles.text}>
          {titleType}
        </Text>

        <Text style={styles.text}>
          {(endYear) ? `${year} - ${endYear!}` : year}
        </Text>

        {(position) &&
          <Text style={styles.text}>
            Top ranking Nº {position}
          </Text>}
      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,

    elevation: 9,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    backgroundColor: 'lightgray'
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  backButton: {
    position: 'absolute',
    zIndex: 999,
    elevation: 9,
    top: 35,
    left: 10,
  },
  text: {
    fontSize: 23,
    marginTop: 10,
    color: 'white'
  }
});