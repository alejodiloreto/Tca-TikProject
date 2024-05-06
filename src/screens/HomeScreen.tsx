import { ScrollView, View } from "react-native"
import { useMovies } from "../hooks/useMovies"
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Carousel } from "../components/Carousel";
import { FullScreenLoader } from "../components/FullScreenLoader";
import { TopSeriesList } from "../components/TopSeriesList";

export const HomeScreen = () => {

  const { top } = useSafeAreaInsets();
  const { isLoading, upcomingMovies, topSeries } = useMovies();

  if (isLoading) {
    return <FullScreenLoader />
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, paddingBottom: 50 }}>
        <Carousel movies={upcomingMovies} />
        <TopSeriesList series={topSeries} />
      </View>
    </ScrollView>
  )
}

