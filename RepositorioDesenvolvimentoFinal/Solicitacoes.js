import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedEstagiario, setSelectedEstagiario] = useState('');

  const abrirPopup = (nome) => {
    setSelectedEstagiario(nome);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header com seta + botões */}
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

      {/* Lista de Estagiários */}
      <ScrollView>
        {[1, 2, 3, 4, 5].map((num) => (
          <View key={num} style={styles.estagiarioRow}>
            <Text style={styles.estagiarioText}>Estagiário {num}</Text>
            <TouchableOpacity
              style={styles.pedidoBotao}
              onPress={() => abrirPopup(`Estagiário ${num}`)}
            >
              <Text style={styles.pedidoTexto}>Pedido Pendente</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Popup Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {/* Botão X para fechar */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeText}>✕</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>{selectedEstagiario}</Text>
            <Text style={styles.modalText}>
              Solicitação para ajustar algum erro cometido, seja o de bater o ponto na entrada,
              na saída e etc...
            </Text>
            <Text>dfasdfasfas</Text>
            <Text>fdasfasdfsafasafasdfasdfa</Text>
            <Text>fdsfasdfasfasfdf</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: '#f1c600',
    fontSize: 20,
  },
  smallButton: {
    padding: 5,
    backgroundColor: '#ba9a04',
    borderRadius: 8,
    margin: 4,
  },
  backArrow: {
    fontSize: 22,
    fontWeight: 'bold',
    marginRight: 10,
  },
  observacaoButton: {
    backgroundColor: '#f1c600',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  mensagensButton: {
    backgroundColor: '#f1c600',
    padding: 8,
    borderRadius: 5,
    marginRight: 10,
  },
  headerButtonText: {
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '600',
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
  profileCircle: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#fff',
    fontSize: 10,
  },
  estagiarioRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  estagiarioText: {
    fontSize: 16,
  },
  pedidoBotao: {
    backgroundColor: '#f1c600',
    padding: 8,
    borderRadius: 20,
  },
  pedidoTexto: {
    fontSize: 10,
    color: '#000',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: '#000000aa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
    width: '85%',
    position: 'relative',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
  },
  modalText: {
    marginBottom: 10,
  },
  closeButton: {
    position: 'absolute',
    top: 5,
    right: 10,
    zIndex: 1,
  },
  closeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
