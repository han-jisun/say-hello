import { Route, NavLink ,useNavigate, Routes } from "react-router-dom"
import React , {useState} from 'react';
import { StyleSheet, TextInput, Text, View, Button,SafeAreaView ,Image,TouchableOpacity} from 'react-native';
import MainImg from '../assets/images/main.png'
import { inputStyles ,btnStyles } from '../globalStyle'
import CustomBtn from '../components/CustomButton'

import styled from 'styled-components/native'

const styles = StyleSheet.create({
    common : {
        backgroundColor : '#FFFFFF',
        flex : 1
    },
    title : {
        fontSize : 24,
        color : '#666666',
        fontWeight: 700,
        padding : 30,
        textAlign : 'center'
    },
    imgArea :{
        height : '50%',  
    },
    inputArea : {
        height : '30%',
    },
    btnArea : {
        height : '20%',
        marginLeft : 15,
        marginRight : 15,

    },
    mainImg: {
        padding : 30,
        width : 250,
        height: 250,
        margin : 'auto',
        alignItems : 'center',
    },
    logo: {
      width: 66,
      height: 58,
    },
    mgVtAuto : {
       marginTop : 'auto',
       marginBottom : 'auto',
    },
    container:{
        flex:1,
        padding : 50,
        alignItems :'center',
        justifyContent :'center',
    }
  });



function Login({navigation}){
    const [text, onChangeText] = useState('');
    const [number, onChangeNumber] = useState('');
  
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.common}>
                <View style={styles.mgVtAuto}>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center', marginTop:170}}>전화해줘</Text>
                    <View style={styles.imgArea}>
                       <Image style={styles.mainImg}  marginTop={10}  margin={80} source={MainImg}/>
                    </View>
                </View>
            
                
                <View style={styles.inputArea}>
                    <View style={styles.mgVtAuto}>
                        <View style={inputStyles.wrap}> 
                            <Text style={inputStyles.label}>연락처</Text>
                            <TextInput style={inputStyles.input} placeholderTextColor={'#666666'} onChangeText={onChangeText} value={text} placeholder="10자리의 번호를 입력하세요."/>
                        </View>
                        <View style={inputStyles.wrap}> 
                            <Text style={inputStyles.label}>비밀번호</Text>
                            <TextInput style={inputStyles.input} placeholderTextColor={'#666666'} onChangeText={onChangeNumber} value={number} placeholder="6자리의 비밀번호를 입력하세요." 
                        secureTextEntry={true}/>
                        </View>
                     
                    </View>
                </View>
                <View style={styles.btnArea}>
                    <View style={styles.mgVtAuto}>
                        <CustomBtn
                            title={'시작하기'}
                            background = {'#2196F3'}
                            border={'#2196F3'}
                            fontColor={'#FFFFFF'}
                            onPress={() => navigation.push('Main')}/>
                        <CustomBtn
                            title={'등록하기'}
                            background = {'#FFFFFF'}
                            border={'#2196F3'}
                            fontColor={'#2196F3'}
                            onPress={() => navigation.push('Join')}/>
                 
                    </View>
                </View>
                
            </View>
        </SafeAreaView>
    )
}

export default Login