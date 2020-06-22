import { createStackNavigator } from '@react-navigation/stack';
import { IntroScreen } from '../Screens/Intro';

const MainStack = createStackNavigator()

export const MainStackNavigator = () => (
  <MainStack.Navigator initialRouteName='Intro'>
    <MainStack.Screen name='Intro' component={IntroScreen} />
  </MainStack.Navigator>
)