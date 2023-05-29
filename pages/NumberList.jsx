import { NumberListData } from "../Data"
import React from 'react';
import { View, Image } from 'react-native';

function List(){
    console.log("데이터 확인")
    console.log(NumberListData)
    return(
        <div>
            <View>
                <View>
                    <Image source={require('../assets/images/photo/photo01.png')} />
                </View>
                
            </View>
        </div>
    )
}

export default List