import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Inicio from '../screens/Inicio';
import Personajes from '../screens/Personajes';
import Momentos from '../screens/Momentos';
import AcercaDe from '../screens/AcercaDe';
import Contratame from '../screens/Contratame';
import EnMiVida from '../screens/EnMiVida'; 

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
        <Stack.Screen name="Personajes" component={Personajes} />
        <Stack.Screen name="Momentos" component={Momentos} />
        <Stack.Screen name="AcercaDe" component={AcercaDe} />
        <Stack.Screen name="Contratame" component={Contratame} />
        <Stack.Screen name="EnMiVida" component={EnMiVida} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;


