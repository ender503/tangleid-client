import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 35,
    paddingLeft: 15,
    paddingRight: 15,
    marginBottom: 64,
    alignItems: 'stretch',
  },
  h1: {
    marginBottom: 15,
    fontSize: 25,
    textAlign: 'center',
    margin: 15,
  },
  h2: {
    marginBottom: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  p: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'center',
  },
  button: {
    height: 44,
    marginBottom: 15,
    backgroundColor: '#113285',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingRight: 15,
    paddingLeft: 15,
  },
  buttonLabel: {
    fontSize: 20,    
    textAlign: 'center',
    color: '#FFFFFF'
  },
  textInput: {
    height: 44,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },
});