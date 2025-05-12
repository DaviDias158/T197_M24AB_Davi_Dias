import {
  Text,
  View,
  TextInput,
  Button,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Style from './StyleAcesso';
import React, { useState } from 'react';
import { db } from './firebaseConfig';

function Telainfo({ navigation }) {
  const [text_nome, setText_nome] = useState('');
  const [text_email, setText_email] = useState('');
  const enviarMensagem = async () => {
    if (text_nome && text_email) {
      const novaMensagem = {
        nome: text_nome,
        email: text_email,
        data: new Date().toISOString(),
      };
      try {
        console.log('Firestore DB:', db);
        await db.collection('mensagens').add(novaMensagem);
        alert('Mensagem enviada com sucesso!');
        setText_nome('');
        setText_email('');
      } catch (error) {
        alert('Erro ao enviar: ' + error.message);
      }
    } else {
      alert('Por favor, preencha todos os campos.');
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
          <View style={Style.container_infos}>
            <Text style={Style.texto_apresentacao}>Entre na sua conta</Text>
          </View>
          <View>
            <TextInput
              style={Style.input_contato}
              placeholder="Digite seu email..."
              placeholderTextColor="gray"
              value={text_nome}
              onChangeText={setText_nome}
            />
          </View>
          <View>
            <TextInput
              style={Style.input_contato}
              placeholder="Digite sua senha..."
              placeholderTextColor="gray"
              value={text_email}
              onChangeText={setText_email}
            />
          </View>
          <Button
            style={Style.entrar_button}
            title="Entrar"
            onPress={() => navigation.navigate('Inicio')}
          />
        </View>
      </View>
      <View style={Style.container_icone_esqueceu}>
        <Text>
          <Text onPress={() => Linking.openURL('https://www.unifor.br')}>
            <Text style={Style.texto_instituicao}>Esqueceu a senha</Text>
          </Text>
        </Text>
      </View>
    </View>
  );
}
export default Telainfo;
