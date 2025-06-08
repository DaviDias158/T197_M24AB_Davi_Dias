import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { db } from './firebaseConfig';

function EsqueciSenha({ navigation }) {
  const [email, setEmail] = useState('');

  const handleRecoverPassword = async () => {
    const emailLimpo = email.trim().toLowerCase();

    if (!emailLimpo || !emailLimpo.includes('@')) {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
      return;
    }

    try {
      const snapshot = await db
        .collection('usuarios')
        .where('email', '==', emailLimpo)
        .get();

      if (snapshot.empty) {
        Alert.alert('Erro', 'E-mail não encontrado.');
        return;
      }

      const usuarioDoc = snapshot.docs[0];
      const dados = usuarioDoc.data();

      if (!dados.senha) {
        Alert.alert('Erro', 'Senha não encontrada para este e-mail.');
        return;
      }

      Alert.alert(
        'Senha recuperada',
        `A senha vinculada ao e-mail ${emailLimpo} é:\n\n${dados.senha}`,
        [
          {
            text: 'OK',
            onPress: () => {
              setEmail('');
              navigation.navigate('TelaAcesso');
            },
          },
        ]
      );
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um problema ao recuperar a senha.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaAcesso')}>
          <Ionicons name="arrow-back" size={21} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.logoContainer}>
        <Image
          style={styles.imagem}
          source={require('./assets/PNGdeletadepois.png')}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>
          Informe seu e-mail e enviaremos{'\n'}a senha vinculada (apenas para testes)
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail..."
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={handleRecoverPassword}>
          <Text style={styles.buttonText}>Recuperar senha</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#888',
    padding: 30,
  },
  header: {
    alignItems: 'left',
    flexDirection: 'row',
    padding: 5,
  },
  logoContainer: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    marginBottom: 50,
    backgroundColor: '#2b2b2b',
    borderRadius: 10,
    padding: 20,
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    width: '100%',
    color: '#fff',
  },
  button: {
    backgroundColor: '#00aaff',
    padding: 6,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 300,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default EsqueciSenha;
