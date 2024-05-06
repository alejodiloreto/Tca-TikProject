import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailsScreen: {
    id: string, 
    image: string | undefined,
    title: string,
    titleType: string,
    year: number,
    endYear?: number | null,
    position?: number
  };  
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#1C1C27'
      }
    }} >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}