import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

export default function Pesquisar() {
  const [text, onChangeText] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Buscar"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#4F4F4F",
    color:"white",
  },
  fundo:{
    backgroundColor:"black",
    alignContent:"center",
  },
});
