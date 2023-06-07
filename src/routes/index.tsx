import React, { useContext } from 'react';

import { View, ActivityIndicator } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';
import Colors from '../constants/Colors';
import { AuthContext } from '../contexts/AuthContext';

export default function Routes() {
  const { isAuthenticated, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <View 
        style={{ 
          flex: 1,
          backgroundColor: Colors.light.background,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
        
        <ActivityIndicator size={60} color={ Colors.light.text }/>
      </View>
    )
  }

  return (
    isAuthenticated ? <AppRoutes/> : <AuthRoutes/>
  )
}