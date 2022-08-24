import React from 'react';
import { View,Text} from '@react-navigation/native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage';
import Chat from './src/pages/Chat'

const Stack=createNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='HomePage'component={HomePage} options={{headerShown: false}}/>
        <Stack.Screen name='Chat' component={Chat} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;