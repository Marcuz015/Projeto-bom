import React from 'react';
import {SafeAreaView, StyleSheet, TextInput, Image, View} from 'react-native';

export default function Home() {
  const [text, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState('');
  return (
    <SafeAreaView style={styles.fundo}>
      <View>
      <Image
            source={require('./logo.jpeg')}
            style={styles.Image}
          />
      </View>
      <View style={styles.texto}>
        <TextInput
        inlineImageLeft="search1"
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Nome de usuario"
        keyboardType="email-address"
        />
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Senha"
        keyboardType="numeric"
      /> </View>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#4F4F4F",
    color:"white",
  },
  Image:{
    height:63,
  },
  fundo:{
    backgroundColor:"black",
    alignContent:"center",
  },
  texto:{
    textAlign:"center",
    
  }
});
