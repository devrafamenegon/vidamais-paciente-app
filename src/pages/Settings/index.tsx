import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';
import { AuthContext } from '../../contexts/AuthContext';

export default function Settings() {
  const { signOut } = useContext(AuthContext)

  return(
    <View style={styles.container}>
      <TouchableOpacity style={styles.signOut} onPress={signOut}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background
  },
  signOut: {
    height: 48,
    width: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 24,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: Colors.light.alert,
    borderRadius: 15
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.background
  }
})