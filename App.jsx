import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState,useEffect } from 'react'
import { NavigationContainer, useNavigation  } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
import { AntDesign } from '@expo/vector-icons'; 

import Login from './pages/Login'
import Join from './pages/Join'
import Main from './pages/CallMain'
import Add from './pages/NumberAdd'
import List from './pages/NumberList'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Login"> 
        <Stack.Screen name="Login" component={Login}  
          options={{
            headerShown: false,
          }}/>
        <Stack.Screen name="Join" component={Join} options={{ title: '사용자 등록',
        headerLeft: () => (
          <BackButton />
        ), headerTitleAlign: 'center', // 텍스트를 중앙 정렬
      }} 
        />
        <Stack.Screen name="Main" component={Main} options={{ title: '전화걸기' ,headerLeft: () => (
          <BackButton />
        ), headerTitleAlign: 'center'}} />
      </Stack.Navigator>

    </NavigationContainer>
    
  );
}
function BackButton() {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <AntDesign
      name="left"
      size={24}
      color="black"
      onPress={handleGoBack}
    />
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
