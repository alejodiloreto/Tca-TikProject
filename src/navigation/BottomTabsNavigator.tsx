import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchScreen } from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Platform } from 'react-native';

export type RootTabsParams = {
  HomeScreen: undefined;
  SearchScreen: undefined;
}

const Tab = createBottomTabNavigator<RootTabsParams>();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#1C1C27',
      }}
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'android' ? 5 : 0
        },
      }}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} options={{title: 'Home', tabBarIcon: ({focused}) => (<Icon name="home" size={20} color={focused ? 'black' : 'grey'} />)}} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} options={{title: 'Search', tabBarIcon: ({focused}) => (<Icon name="search" size={20} color={focused ? 'black' : 'grey'} />)}} />
    </Tab.Navigator>
  );
}