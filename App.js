import { NavigationContainer, StackActions } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './screen/ZipCodeScreen';
import React from 'react'
import WeatherScreen from './screen/WeatherScreen';

const Stack = createStackNavigator();

export default function App() {
      return ( 
        <NavigationContainer >
          <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
            <Stack.Screen name="Weather in Trang" component={ZipCodeScreen}options={{
          title: 'Weather in Trang',
          headerStyle: {
            color: 'white',
            backgroundColor: '#FFDEAD',
          },
          headerTintColor: '#00000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
            <Stack.Screen name="Weather" component={WeatherScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
}