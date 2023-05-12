import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

export type RootStackParamList = {
  HomeScreen: { title: String }
  DetailsScreen: { itemId: number; itemName: string }
}

export type HomeProps = StackScreenProps<RootStackParamList, "HomeScreen">
export type DetailsProps = StackScreenProps<RootStackParamList, "DetailsScreen">

const Root = createStackNavigator<RootStackParamList>()

const Navigator = () => {
  return (

    <NavigationContainer>
      <Root.Navigator initialRouteName="HomeScreen">
        <Root.Screen
          name="HomeScreen"
          component={HomeScreen}
        />

        <Root.Screen
          name="DetailsScreen"
          component={DetailsScreen}
        />

      </Root.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;