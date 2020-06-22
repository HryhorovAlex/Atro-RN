/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MainStackNavigator } from 'Navigator/Navigator';

const App = () => {
  return (
    <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <MainStackNavigator /> */}
      </SafeAreaView>
    </NavigationContainer>
    </>
  );
};

export default App;
