import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import Toast from 'react-native-toast-message';

export const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
      <Toast />
    </NavigationContainer>
  )
}