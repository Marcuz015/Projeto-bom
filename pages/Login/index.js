import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Text } from 'react-native';


export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username ==='' || password === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }

    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <View style={styles.fundo}>
      <Text style={styles.texto}>
      Welcome to music's love
      </Text>
      <TextInput
        style={styles.campos}
        placeholder="Nome de usuário"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.campos}
        placeholder="Senha"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Logar" onPress={handleLogin} />  
    </View>
  );
}

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
  },
  campos: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderColor: "#6959CD",
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color:"#6959CD"
  },
  texto:{
    color:"#FFFFFF",
    fontSize: 42,
    textAlign: "center",
    alignItems: "center",
  }
});
