import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './StyleTelaObs';

function TelaObs({navigation}) {
  const estagiarios = [
    {
      nome: 'Estagiário 1',
      status: 'Ultrapassou a quantidade de horas necessárias',
    },
    {
      nome: 'Estagiário 2',
      status: 'Não atingiu a quantidade de horas necessárias',
    },
    {
      nome: 'Estagiário 3',
      status: 'Ultrapassou a quantidade de horas necessárias',
    },
    {
      nome: 'Estagiário 4',
      status: 'Não atingiu a quantidade de horas necessárias',
    },
    {
      nome: 'Estagiário 5',
      status: 'Ultrapassou a quantidade de horas necessárias',
    },
  ];

  return (
    <View Style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <Ionicons name="arrow-back" size={21} color="black" />
      </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Obs')}>
          <Text style={styles.headerButton}>Estagiários em observação</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TelaMensagens')}>
                
        <Text style={styles.headerButton}>Mensagens</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.profileButton}>
          <Image
            style={styles.imagem}
            source={require('./assets/transferir.jpg')}
          />
        </TouchableOpacity>
      </View>

      {/* Lista de Estagiários */}
      <ScrollView style={styles.scroll}>
        {estagiarios.map((item, index) => (
          <View key={index} style={styles.row}>
            <Text style={styles.name}>{item.nome}</Text>
            <Text style={styles.status}>{item.status}</Text>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.circleText}>quantidade de horas</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Seta inferior */}
      <View style={styles.arrowDown}>
        <Ionicons name="chevron-down" size={40} color="gray" />
      </View>
    </View>
  );
}

export default TelaObs;
