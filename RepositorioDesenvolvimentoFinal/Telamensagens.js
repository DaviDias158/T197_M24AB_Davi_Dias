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

function Telamensagens({ navigation }) {
  const contatos = [
    { nome: 'Contato 1', mensagem: 'Mensagem não lida', notificar: true },
    { nome: 'Contato 2', mensagem: 'Mensagem não lida', notificar: true },
    { nome: 'Contato 3', mensagem: 'Mensagem', notificar: false },
    { nome: 'Contato 4', mensagem: 'Mensagem', notificar: false },
    { nome: 'Contato 5', mensagem: 'Mensagem', notificar: false },
  ];

  const handleContatoPress = (contato) => {
    console.log('Contato clicado:', contato.nome);
    // Aqui você pode navegar para outra tela ou fazer outra ação
  };

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      
      <View style={styles.header}>
      <TouchableOpacity onPress={() => navigation.navigate('Inicio')}>
        <Ionicons name="arrow-back" size={21} color="black" />
      </TouchableOpacity>
        <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('Obs')}>
          <Text style={styles.headerButton}>Estagiários em observação</Text>
        </TouchableOpacity>
        <View style={styles.scrollContainer}>
        <View style={styles.espacamento}> 
        <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('TelaMensagens')}>
           
        <Text style={styles.headerButton}>Mensagens</Text>
        </TouchableOpacity>
        
        </View>
        <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('Solicitacoes')}>
                
        <Text style={styles.headerButton}>Solicitações</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('telaPerfil')}>
          <Image
            style={styles.imagem}
            source={require('./assets/transferir.jpg')}
          />
        </TouchableOpacity>
      </View>

      {/* Lista de Contatos */}
      <ScrollView style={styles.scrollArea}>
        {contatos.map((contato, index) => (
          <TouchableOpacity
            key={index}
            style={styles.row}
            onPress={() => handleContatoPress(contato)}>
            <View style={styles.rowLeft}>
              <Text style={styles.nome}>{contato.nome}</Text>
              <Text style={styles.status}>{contato.mensagem}</Text>
            </View>
            {contato.notificar && (
              <View style={styles.circleButtonSmall}></View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Ícone de seta no final */}
      <View style={styles.bottomArrow}>
        <Text style={{ fontSize: 48, color: 'gray' }}>⌄</Text>
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
  smallButton: {
    padding: 5,
    backgroundColor: '#ba9a04',
    borderRadius: 8,
    margin: 4,
  },
  imagem: {
    width: 50,
    height: 50,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '',
  },
  scrollArea: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 10,
    alignItems: 'center',
  },
  rowLeft: {
    flex: 1,
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  status: {
    fontSize: 12,
    marginTop: 4,
  },
  circleButtonSmall: {
    backgroundColor: '#f1c600',
    width: 20,
    height: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // circleTextSmall: {
  //   textAlign: 'center',
  //   fontSize: 10,
  // },
  bottomArrow: {
    alignItems: 'center',
    padding: 10,
  },
});

export default Telamensagens;
