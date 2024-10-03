import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginTop: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 10,
  },
});

export default styles;
