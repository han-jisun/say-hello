import React, { Component } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native'


const ButtonContainer = styled.TouchableOpacity`
    background-color: #9b59b6;
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`;

const Title = styled.Text`
    font-weight: 600;
    color: #fff;
`;


export default class CustomButton extends Component{
  static defaultProps = {
    title: '',
    buttonColor: '#000',
    titleColor: '#fff',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity 
        onPress={this.props.onPress} style={styles.button}>
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 32,
  },
  title: {
    fontSize: 14,
    lineHeight: 21,
    color: 'white',
  },
});

