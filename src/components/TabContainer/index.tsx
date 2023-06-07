import React, { PropsWithChildren } from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import Colors from '../../constants/Colors';

export default function TabContainer({ children, title }: PropsWithChildren<{ title: string }>) {
  return(
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      { children }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: '8%',
    backgroundColor: Colors.light.background
  },
  title: {
    marginTop: 32,    
    fontSize: 28,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.text,
    marginBottom: 24
  }
})