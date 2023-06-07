import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import Colors from '../../constants/Colors';

import { AuthContext } from '../../contexts/AuthContext';

export default function SignIn() {
const { signIn, loadingAuth } = useContext(AuthContext)

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    await signIn({ email, password });
  }

  return(
    <View style={styles.container}>
      <Text style={styles.title}>Entrar ou Cadastrar-se</Text>

      <View style={styles.inputContainer}>
        <TextInput  
          placeholder='Email'
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput  
          placeholder='Senha'
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        { loadingAuth ? (
          <ActivityIndicator size={25} color={Colors.light.text}/>
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
        
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.background
  },
  title: {
    marginBottom: 64,
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text
  },
  inputContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  input: {
    width: '100%',
    height: 50,
    marginBottom: 40,
    paddingLeft: 8,
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    backgroundColor: Colors.light.background,
    borderBottomColor: Colors.light.textDetail,
    borderBottomWidth: 2,
  },
  button: {
    width: '80%',
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.detail,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.background
  }
})