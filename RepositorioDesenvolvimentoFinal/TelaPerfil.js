import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function TelaPerfil({ navigation }) {
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
              source={require('./assets/transferir.jpg')}
            />
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Jennifer Laiz</Text>
          </View>
        </View>

        <View style={styles.info}>
          <Text>Email: email@gmail.com</Text>
          <Text>Data de nascimento: 13/10/1990</Text>
          <Text>Endereço: Rua X</Text>
          <Text>Horário de serviço: 09h / 17H</Text>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.smallButton} onPress={() => navigation.navigate('TelaAcesso')}>
            <Text>Sair</Text>
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
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 1,
    backgroundColor: '#f1c600',
    fontSize: 20,
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
    justifyContent: 'left',
    flexWrap: 'wrap',
  },
  smallButton: {
    padding: 10,
    backgroundColor: 'red',
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

export default TelaPerfil;
