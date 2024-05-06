import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from '../screens/DetailsScreen';
import { BottomTabNavigator } from './BottomTabsNavigator';

export type RootStackParams = {
  Tabs: undefined;
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

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      cardStyle: {
        backgroundColor: '#1C1C27'
      }
    }} >
      <Stack.Screen name="Tabs" component={BottomTabNavigator} />
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
    </Stack.Navigator>
  );
}