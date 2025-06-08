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

function Telainfo({ navigation }) {
  const [text_nome, setText_nome] = useState('');
  const [text_email, setText_email] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const fazerLogin = async () => {
    if (!text_nome || !text_email) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const snapshot = await db.collection('usuarios')
        .where('email', '==', text_nome)
        .where('senha', '==', text_email)
        .get();

      if (!snapshot.empty) {
        alert('Login bem-sucedido!');
        navigation.navigate('Inicio');
      } else {
        alert('Email ou senha inválidos!');
      }
    } catch (error) {
      alert('Erro ao fazer login: ' + error.message);
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
          <Text style={Style.texto_apresentacao}>Entre na sua conta</Text>

          <TextInput
            style={Style.input_contato}
            placeholder="Digite seu email..."
            placeholderTextColor="gray"
            value={text_nome}
            onChangeText={setText_nome}
          />

          <View style={{ position: 'relative' }}>
            <TextInput
              style={Style.input_contato}
              placeholder="Digite sua senha..."
              placeholderTextColor="gray"
              secureTextEntry={!mostrarSenha}
              value={text_email}
              onChangeText={setText_email}
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
            <View>
              <Button
                style={Style.espacamento}
                title="Entrar"
                onPress={fazerLogin}
              />
            </View>
            <View style={Style.espacamento}>
              <Button
                style={Style.entrar_button}
                title="Criar Conta"
                onPress={() => navigation.navigate('CriarConta')}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={Style.container_icone_esqueceu}>
        <Text onPress={() => navigation.navigate('EsqueciSenha')}>
          <Text style={Style.texto_instituicao}>Esqueceu a senha</Text>
        </Text>
      </View>
    </View>
  );
}

export default Telainfo;
