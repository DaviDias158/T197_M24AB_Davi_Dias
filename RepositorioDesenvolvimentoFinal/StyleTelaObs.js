import { StyleSheet } from 'react-native';

const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingTop: 40,
  },
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
  profileText: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  scroll: {
    flex: 1,
    // marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#b0b0b0'
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginVertical: 4,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  name: {
    width: 90,
    fontWeight: 'bold',
  },
  status: {
    flex: 1,
    fontSize: 10,
    marginHorizontal: 10,
  },
  circleButton: {
    backgroundColor: '#f1c600',
    borderRadius: 20,
    padding: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleText: {
    fontSize: 8,
    textAlign: 'center',
  },
  arrowDown: {
    alignItems: 'center',
    paddingVertical: 10,
  },
});

export default Style;
