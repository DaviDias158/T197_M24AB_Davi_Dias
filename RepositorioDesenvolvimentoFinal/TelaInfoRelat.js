import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function TelaInfoRelat({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Inicio')}>
          <Text>X</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text></Text>
        </TouchableOpacity>
        <View>
          <View style={styles.profileCircle}>
            <TouchableOpacity style={styles.profilePic}>
              <Image
                style={styles.imagem2}
                source={require('./assets/transferir.jpg')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.profileRow}>
          <View style={styles.profilePic}>
            <Image
              style={styles.imagem}
              source={require('./assets/cara.jpg')}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Davi da Costa</Text>
            <Text>Data de nascimento: 13/10/2001</Text>
            <Text>Endereço: Rua X</Text>
            <Text>Supervisor(a): Jennifer</Text>
            <Text>Horário de serviço: 13h/22h</Text>
          </View>
        </View>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.smallButton}onPress={() => navigation.navigate('Relatorio')}>
            <Text>Seg</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}onPress={() => navigation.navigate('RelatTer')}>
            <Text>Ter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}onPress={() => navigation.navigate('RelatQuar')}>
            <Text>Quar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}onPress={() => navigation.navigate('RelatQuin')}>
            <Text>Quin</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}onPress={() => navigation.navigate('RelatSex')}>
            <Text>Sex</Text>
          </TouchableOpacity>
         
        </View>

        <View style={styles.info}>
          <Text>
            Segunda:
          </Text>
          <Text>
            9H: Bateu o ponto
          </Text>
          <Text>
            12H: Bateu o ponto Horário de almoço
          </Text>
          <Text>
            13H: Bateu o ponto Fim Horário de almoço 
          </Text>
          <Text>
            16H: Bateu o ponto Fim do turno
          </Text>
          <Text>
            OBs: Horário cumprido
          </Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.smallButton}onPress={() => navigation.navigate('InfoEstagio')}>
            <Text>Descrição do Estagiário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.smallButton}>
            <Text>Whatsapp</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#888',
    flex: 1,
    width: 'auto',
  },
  header: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 10,
  },
  topMenu: {
    alignItems: 'center',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  menuButton: {
    width: 30,
    height: 30,
    padding: 8,
    textalign: 'center',
    backgroundColor: '#deb10d',
    borderRadius: 8,
  },
  card: {
    backgroundColor: '#D9D9D9',
    padding: 16,
    borderRadius: 12,
  },
  profileRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  profilePic: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 12,
  },
  profileText: {
    fontSize: 12,
    textAlign: 'center',
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  info: {
    marginBottom: 16,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  smallButton: {
    padding: 10,
    backgroundColor: '#deb10d',
    borderRadius: 8,
    margin: 4,
  },
  imagem: {
    width: 100,
    height: 120,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '',
  },
  imagem2: {
    width: 50,
    height: 50,
    borderRadius: 300,
    borderWidth: 3,
    borderColor: '',
  },
  profileCircle: {
    width: 60,
    height: 60,
    backgroundColor: '',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 5,
  },
});

export default TelaInfoRelat;
