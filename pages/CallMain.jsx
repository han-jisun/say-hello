import { StyleSheet, Text, View, Button } from 'react-native';
import CustomButton from '../components/CustomButton';
function Main(){
    const onPressCall = () => {
        //음성 인식 코드 구현
        alert("전화걸기")
    }
    return(
        <View>
            <button onClick={() => {onPressCall()}}>전화걸기</button>
        </View>
        
    )
}

export default Main