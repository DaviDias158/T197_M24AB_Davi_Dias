
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaAcesso from './TelaAcesso';
import TelaObs from './TelaObs';
import TelaInicial from './TelaInicial';
import TelaInfoEstagio from './TelaInfoEstagio';
import Telamensagens from './Telamensagens';
import TelaInfoRelat from './TelaInfoRelat'
import TelaRelatTer from './TelaRelatTer';
import TelaRelatQuar from './TelaRelatQuar';
import TelaRelatQuin from './TelaRelatQuin';
import TelaRelatSex from './TelaRelatSex';
import TelaPerfil from './TelaPerfil';
import EsqueciSenha from './EsqueciSenha';
import TelaCriarConta from './TelaCriarConta';
import HomeScreen from './Solicitacoes';

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
        <Stack.Screen name = "Relatorio" component = {TelaInfoRelat}/>
        <Stack.Screen name = "RelatTer" component = {TelaRelatTer}/>
        <Stack.Screen name = "RelatQuar" component = {TelaRelatQuar}/>
        <Stack.Screen name = "RelatQuin" component = {TelaRelatQuin}/>
        <Stack.Screen name = "RelatSex" component = {TelaRelatSex}/>
        <Stack.Screen name = "telaPerfil" component = {TelaPerfil}/>
        <Stack.Screen name = "EsqueciSenha" component = {EsqueciSenha}/>
        <Stack.Screen name = "CriarConta" component = {TelaCriarConta}/>
        <Stack.Screen name = "Solicitacoes" component = {HomeScreen}/>

        
      </Stack.Navigator>
    </NavigationContainer>


  );
}


