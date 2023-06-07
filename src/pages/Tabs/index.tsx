import React from 'react';
import Medicines from '../Medicines';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Home from '../Home';
import Colors from '../../constants/Colors';
import Exams from '../Exams';
import Consultations from '../Consultations';
import TabIcon from './components/TabIcon';
const Tab = createMaterialTopTabNavigator();

export default function Tabs() {
  return(
    <Tab.Navigator tabBarPosition='bottom' screenOptions={{
      tabBarIconStyle: { width: 25, height: 25 },
      tabBarItemStyle: { height: 100 },
      tabBarStyle: { height: 60 },
    }}>
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ 
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
          focused ? (
            <TabIcon source={require('../../assets/icons/HomeSelected.png')}/>
          ) : (
            <TabIcon source={require('../../assets/icons/Home.png')}/>
          ),
        }}
      />

      <Tab.Screen 
        name="Medicines" 
        component={Medicines} 
        options={{ 
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
          focused ? (
            <TabIcon source={require('../../assets/icons/MedicinesSelected.png')}/>
          ) : (
            <TabIcon source={require('../../assets/icons/Medicines.png')}/>
          ),
        }}
        />

        <Tab.Screen 
        name="Exams" 
        component={Exams} 
        options={{ 
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
          focused ? (
            <TabIcon source={require('../../assets/icons/ExamsSelected.png')}/>
          ) : (
            <TabIcon source={require('../../assets/icons/Exams.png')}/>
          ),
        }}
        />

        <Tab.Screen 
        name="Consultations" 
        component={Consultations} 
        options={{ 
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) =>
          focused ? (
            <TabIcon source={require('../../assets/icons/ConsultationsSelected.png')}/>
          ) : (
            <TabIcon source={require('../../assets/icons/Consultations.png')}/>
          ),
        }}
        />
    </Tab.Navigator>
  )
}

const screenOptions = {
  tabBarStyle:{
    height: 150,
    backgroundColor: Colors.light.background,
  },
  tabBarItemStyle:{
    justifyContent: 'center',
    alignItems: 'center',
  }
};