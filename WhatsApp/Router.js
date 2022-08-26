import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage';
import ChatPage from './src/pages/ChatPage'

const Stack=createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='HomePage'component={HomePage} />
        <Stack.Screen name='ChatPage' component={ChatPage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;