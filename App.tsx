import { StatusBar } from 'react-native';
import Colors from './src/constants/Colors';

import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from './src/contexts/AuthContext';

import { useFonts, Inter_700Bold, Inter_400Regular } from '@expo-google-fonts/inter';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
          <StatusBar backgroundColor={Colors.light.background} barStyle="dark-content" translucent={false}/>
          <Routes/>
      </AuthProvider>
    </NavigationContainer>
  );
}
