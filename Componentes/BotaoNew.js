import react from "react";
import { StyleSheet, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';

export default function BotaoNew({color, size}){
    return(
        <View style={style.teste}><Entypo name="plus" size={size} color={color} /></View>
    )
}

const style = StyleSheet.create({
    teste:{
        width: 60,
        height: 60,
        backgroundColor: "#6959CD",
        borderRadius: 30,
        alignItems: "center",
        justifyContent:"center",
        marginBottom: 40
    }
  
})