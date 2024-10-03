import { StyleSheet } from 'react-native';

export const createStyles = (theme) => 
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingHorizontal: 20,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 32,
      fontWeight: 'bold',
      marginBottom: 20,
      textAlign: 'center',
      color: theme.text,
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: theme.inputBackground,
      color: theme.text,
    },
    buttonContainer: {
      backgroundColor: theme.buttonBackground,
      borderRadius: 8,
      paddingVertical: 10,
      marginTop: 10,
    },
    buttonText: {
      fontSize: 18,
      color: theme.buttonText,
      textAlign: 'center',
    },
    inputLabel: {
      color: theme.text,
      marginBottom: 5,
    },
    inputContainer: {
      marginBottom: 15,
    },
  });
