import { ScrollView, View } from "react-native"
import { useMovies } from "../hooks/useMovies"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Carousel } from "../components/Carousel";
import { FullScreenLoader } from "../components/FullScreenLoader";

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isLoading, upcomingMovies } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 30 }}>
        <Carousel movies={upcomingMovies} />
      </View>
    </ScrollView>
  )
}

