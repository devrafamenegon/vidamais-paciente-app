import { StyleSheet, View, StatusBar } from 'react-native';
import SignIn from './src/pages/SignIn'
import Colors from './src/constants/Colors';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar  backgroundColor={Colors.light.background} barStyle="dark-content" translucent={false}/>
      <SignIn />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
