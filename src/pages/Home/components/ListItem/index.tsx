import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '../../../../constants/Colors';

type ListItemProps = {
  title:  string,
  name: string,
  actionText: string,
  additionalInfo: string,
  onPress: () => void,
}

const ListItem = ({ title, name, actionText, additionalInfo, onPress }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title} <Text style={styles.name}>{name}</Text></Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.actionText}>{actionText} →</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
  },
  title: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
  },
  name: {
    fontFamily: 'Inter_700Bold',
    color: Colors.light.detail
  },
  actionText: {
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    color: Colors.light.textDetail
  }
});
