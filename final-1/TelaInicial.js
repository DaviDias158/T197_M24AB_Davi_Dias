import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function TelaInicial({ navigation }) {
  const funcionarios = [
    'Estagiario 1',
    'Estagiario 2',
    'Estagiario 3',
    'Estagiario 4',
    'Estagiario 5',
    'Estagiario 6',
    'Estagiario 7',
  ];

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaAcesso')}>
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

      {/* Lista de funcionários */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {funcionarios.map((nome, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => navigation.navigate('InfoEstagio')}>
            <Text style={styles.cardText}>{nome}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Seta inferior */}
      <View style={styles.arrowContainer}>
        <Text style={styles.arrow}>⌄</Text>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b0b0b0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f1c600',
    fontSize: 20,
  },
  headerButton: {
    fontWeight: 'bold',
    fontSize: 12,
    maxWidth: 90,
    textAlign: 'center',
  },
  profileButton: {
    backgroundColor: '#bbb',
    borderRadius: 300,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '',
  },
  // profileText: {
  //   fontSize: 10,
  //   textAlign: 'center',
  //   color: '#deb10d',
  // },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#000',
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#deb10d',
  },
  arrowContainer: {
    alignItems: 'center',
    padding: 10,
  },
  arrow: {
    fontSize: 32,
    color: 'gray',
  },
});

export default TelaInicial;
