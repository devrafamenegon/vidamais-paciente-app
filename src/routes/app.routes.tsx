import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tabs from '../pages/Tabs';
import Settings from '../pages/Settings';
import Colors from '../constants/Colors';

const Stack = createNativeStackNavigator();

export default function AppRoutes() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
          name="Tabs" 
          component={Tabs}
          options={{ headerShown: false}}
        />
        <Stack.Screen 
          name="Settings" 
          component={Settings}
          options={{ 
            headerBackButtonMenuEnabled: true,
            headerTitleStyle: {
              fontSize: 24,
              fontFamily: 'Inter_700Bold',
            },
            headerTintColor: Colors.light.text
          }}
        />
    </Stack.Navigator>
  )
}

