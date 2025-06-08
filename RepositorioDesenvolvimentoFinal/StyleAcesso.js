import { StyleSheet } from 'react-native';
const Style = StyleSheet.create({
  container_principal: {
    flex: 1,
    backgroundColor: '#888',
  },

  espacamento: {
    marginLeft: 20,
  },
  
  
  header1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    
    marginLeft: 10,
    fontSize: 20,
  },
  container_contato: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  container_login: {
    flex: 1,
    margin: 'auto',
    borderRadius: 10,
    width: 300,
    padding: 20,
    backgroundColor: '#333',
  },
  container_conta: {
    height: 80,
    backgroundColor: '#f2f2f2',
  },
  container_infos: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_icone_voltar_contato: {
    alignItems: 'flex-start',
  },
  container_icone_esqueceu: {
    justifyContent: 'flex-end',
    paddingLeft: 180,
    paddingBottom: 70,
  },
  view_texto_contato: {
    alignItems: 'center',
  },
  texto_contato: {
    color: 'purple',
    fontWeight: 'bold',
    padding: 10,
    fontSize: 25,
  },
  input_contato: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
  input_contato_scrowlView: {
    borderColor: 'purple',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 1,
  },
  textarea: {
    height: 150,
    textAlignVertical: 'top',
    marginBottom: 15,
  },
  texto_apresentacao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  texto: {
    color: '#7f00ff',
    fontWeight: 'bold',
  },
  texto_instituicao: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 300,
  },
  container_redes: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botao: {
    backgroundColor: '#0038',
    width: 100,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  texto_botao: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
export default Style;
