import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaAcesso from './TelaAcesso';
import TelaObs from './TelaObs';
import TelaInicial from './TelaInicial';
import TelaInfoEstagio from './TelaInfoEstagio';
import Telamensagens from './Telamensagens';

const Stack = createStackNavigator();

export default function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName ="TelaAcesso">
        <Stack.Screen name = "TelaAcesso" component= {TelaAcesso}/>
        <Stack.Screen name = "Obs" component = {TelaObs}/>
        <Stack.Screen name = "Inicio" component = {TelaInicial}/>
        <Stack.Screen name = "InfoEstagio" component = {TelaInfoEstagio}/>
        <Stack.Screen name = "TelaMensagens" component = {Telamensagens}/>

        
      </Stack.Navigator>
    </NavigationContainer>


  );
}


