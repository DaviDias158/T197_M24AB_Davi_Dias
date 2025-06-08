import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import Style from './StyleAcesso';
import React, { useState } from 'react';
import { db } from './firebaseConfig';

function TelaCriarConta({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const criarConta = async () => {
    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (senha.length < 6) {
      alert('A senha deve conter pelo menos 6 caracteres.');
      return;
    }

    try {
      const snapshot = await db.collection('usuarios')
        .where('email', '==', email)
        .get();

      if (!snapshot.empty) {
        alert('Este email já está cadastrado.');
        return;
      }

      const novoUsuario = {
        email: email,
        senha: senha,
        dataCriacao: new Date().toISOString(),
      };

      await db.collection('usuarios').add(novoUsuario);

      alert('Conta criada com sucesso!');
      setEmail('');
      setSenha('');
      navigation.navigate('TelaAcesso');

    } catch (error) {
      alert('Erro ao criar conta: ' + error.message);
    }
  };

  return (
    <View style={Style.container_principal}>
      <View style={Style.container_infos}>
        <Image
          style={Style.imagem}
          source={require('./assets/PNGdeletadepois.png')}
        />
      </View>
      <View style={Style.container_login}>
        <View style={Style.container_infos}>
          <Text style={Style.texto_apresentacao}>Crie sua conta</Text>

          <TextInput
            style={Style.input_contato}
            placeholder="Digite seu email..."
            placeholderTextColor="gray"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <View style={{ position: 'relative' }}>
            <TextInput
              style={Style.input_contato}
              placeholder="Digite sua senha..."
              placeholderTextColor="gray"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={!mostrarSenha}
            />
            <TouchableOpacity
              style={{ position: 'absolute', right: 10, top: 10 }}
              onPress={() => setMostrarSenha(!mostrarSenha)}
            >
              <Text style={{ color: 'blue' }}>
                {mostrarSenha ? 'Ocultar' : 'Ver'}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={Style.header1}>
            <Button
              style={Style.espacamento}
              title="Criar"
              onPress={criarConta}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TelaCriarConta;
