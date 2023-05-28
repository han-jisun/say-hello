import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';

import Login from './pages/Login'
import Join from './pages/Join'
import Main from './pages/CallMain'
import Add from './pages/NumberAdd'
import List from './pages/NumberList'

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        // 'NotoSans-Regular': require('./assets/fonts/NotoSans-Regular.ttf'),
      });
    }

    loadFonts();
  }, []);
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={Login} 
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen name="Join" component={Join} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
