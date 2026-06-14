import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { HomeWhatsApp } from './src/screens/HomeWhatsApp/index'; // Adicionamos o /index explicitamente

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0b141a' }}>
      <StatusBar style="light" /> 
      <HomeWhatsApp />
    </View>
  );
}