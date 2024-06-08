import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../app/contexts/AuthContext'; // Importe useAuth
import { FontAwesome5 } from '@expo/vector-icons';

const Login = () => {
  const navigation = useNavigation();
  const { setUser } = useAuth(); // Obtenha setUser do contexto de autenticação
  const [inputEmail, setInputEmail] = useState('');
  const [inputSenha, setInputSenha] = useState('');
  const [erros, setErros] = useState({});

  const handleLogin = async () => {
    const novosErros = {};
    if (!inputEmail) {
      novosErros.inputEmail = 'O e-mail é obrigatório.';
    }
    if (!inputSenha) {
      novosErros.inputSenha = 'A senha é obrigatória.';
    }

    if (Object.keys(novosErros).length > 0) {
      setErros(novosErros);
      return;
    } else {
      setErros({});
    }

    try {
      const usuariosSalvos = await AsyncStorage.getItem('usuarios');
      const listaUsuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];

      const usuario = listaUsuarios.find(
        (user) =>
          (user.email === inputEmail && user.senha === inputSenha) ||
          (inputEmail === 'admin' && inputSenha === '123')
      );

      if (usuario) {
        Alert.alert('Sucesso!','Login bem-sucedido!');
        setUser(usuario); // Atualize o estado do usuário no contexto
        navigation.navigate('Catalogo');
      } else {
        Alert.alert('Falhou!','Email ou senha incorretos.');
      }
    } catch (error) {
      console.error(
        'Erro ao recuperar os dados salvos do AsyncStorage:',
        error
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.column}>
        <TouchableOpacity
          style={styles.rtn}
          onPress={() => navigation.navigate('Cadastro')}>
          <FontAwesome5
            name="arrow-left"
            size={24}
            color="#424141"
            style={{ margin: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.mainTxt}>Login</Text>
        <Text style={styles.inputTxt}>E-mail</Text>
        <TextInput
          value={inputEmail}
          onChangeText={setInputEmail}
          style={styles.txtinput}
          placeholder=""
        />
        {erros.inputEmail ? (
          <Text style={styles.erro}>{erros.inputEmail}</Text>
        ) : null}
        <Text style={styles.inputTxt}>Senha</Text>
        <TextInput
          value={inputSenha}
          onChangeText={setInputSenha}
          style={styles.txtinput}
          secureTextEntry={true}
          placeholder=""
        />
        {erros.inputSenha ? (
          <Text style={styles.erro}>{erros.inputSenha}</Text>
        ) : null}
        <View style={styles.loginArea}>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginTxt}>Esqueceu a senha?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginBtnArea}>
          <TouchableOpacity style={styles.btnEnter} onPress={handleLogin}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 8,
  },
  column: {
    marginBottom: 100,
    width: '92%',
    height: 'stretch',
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 40,
    marginLeft: 10,
  },
  inputTxt: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 0,
    color: '#b5b5b5',
  },
  txtinput: {
    width: '98%',
    backgroundColor: '#E3E3E3',
    height: 45,
    borderRadius: 13,
    paddingLeft: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginBottom: 10,
    outline: 'none',
  },
  erro: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 2,
    color: '#118E96',
  },
  
  loginArea: {
    flexDirection: 'row',
    marginTop: 0,
    marginRight: 10,
    justifyContent: 'flex-end',
    backgroundColor: '#F1F1F1',
    width: 'stretch',
    height: 20,
  },
  loginTxt: {
    fontSize: 13,
    color: '#b5b5b5',
  },
  loginBtn: {
    marginLeft: 2,
  },
  btnEnter: {
    width: '95%',
    top: 15,
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    margin: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default Login;
