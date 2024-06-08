import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome5 } from '@expo/vector-icons';

const Cadastro = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [erros, setErros] = useState({
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    cpf: '',
    email: '',
    senha: '',
    confSenha: '',
  });

  useEffect(() => {
    const inicializarAdmin = async () => {
      try {
        const usuariosSalvos = await AsyncStorage.getItem('usuarios');
        if (!usuariosSalvos) {
          const admin = {
            id: 'admin',
            nome: 'Admin',
            sobrenome: 'User',
            dataNascimento: '',
            cpf: '',
            email: 'admin',
            senha: '123',
          };
          await AsyncStorage.setItem('usuarios', JSON.stringify([admin]));
        }
      } catch (error) {
        console.warn('Erro ao inicializar o usuário admin:', error);
      }
    };

    inicializarAdmin();
  }, []);

  const validarCampos = () => {
    let errosTemp = {};

    if (!nome) errosTemp.nome = 'Digite seu nome';
    if (!sobrenome) errosTemp.sobrenome = 'Digite seu sobrenome';
    if (!dataNascimento) errosTemp.dataNascimento = 'Digite sua data de nascimento';
    if (!cpf) errosTemp.cpf = 'Digite seu CPF';
    if (!email) errosTemp.email = 'Digite o email';
    if (!senha) errosTemp.senha = 'Digite a senha';
    if (!confSenha) errosTemp.confSenha = 'Confirme a senha';

    setErros(errosTemp);

    return Object.keys(errosTemp).length === 0;
  };

  const handleSalvar = async () => {
    if (!validarCampos()) return;

    const novoUsuario = {
      id: Math.floor(Math.random() * 10000).toString(),
      nome,
      sobrenome,
      dataNascimento,
      cpf,
      email,
      senha,
    };

    try {
      const usuariosSalvos = await AsyncStorage.getItem('usuarios');
      let listaUsuarios = usuariosSalvos ? JSON.parse(usuariosSalvos) : [];
      listaUsuarios.push(novoUsuario);
      await AsyncStorage.setItem('usuarios', JSON.stringify(listaUsuarios));
      Alert.alert('Sucesso!','Usuário cadastrado com sucesso!');
      console.warn('Falhou!','Dados salvos no AsyncStorage com sucesso!');
      navigation.navigate('Login');
    } catch (error) {
      console.warn('Erro ao salvar os dados no AsyncStorage:', error);
      Alert.alert('Erro ao salvar usuário!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding">
        <ScrollView contentContainerStyle={{ flexGrow: 4 }}>
          <View style={styles.column}>
            <TouchableOpacity
              style={styles.rtn}
              onPress={() => navigation.navigate('Inicial')}>
              <FontAwesome5
                name="arrow-left"
                size={24}
                color="#424141"
                style={{ margin: 15 }}
              />
            </TouchableOpacity>
            <Text style={styles.mainTxt}>Cadastre-se e conheça nossa variedade de produtos!</Text>
            <Text style={styles.subTxt}>Preencha os dados abaixo para continuar</Text>
           
            <Text style={styles.inputTxt}>Nome</Text>
            <View style={styles.txtArea}>
              <TextInput
                onChangeText={setNome}
                value={nome}
                style={styles.txtinput}
                placeholder=""
              />
            </View>
             {erros.nome ? <Text style={styles.erro}>{erros.nome}</Text> : null}
            <Text style={styles.inputTxt}>Sobrenome</Text>
            <View style={styles.txtArea}>
              <TextInput
                onChangeText={setSobrenome}
                value={sobrenome}
                style={styles.txtinput}
                placeholder=""
              />
            </View>
            {erros.sobrenome ? <Text style={styles.erro}>{erros.sobrenome}</Text> : null}
            <Text style={styles.inputTxt}>Data de nascimento</Text>
            <View style={styles.txtArea}>
              <TextInput
                maxLength={10}
                onChangeText={setDataNascimento}
                value={dataNascimento}
                style={styles.txtinput}
                placeholder="  /  /    "
              />
            </View>
            {erros.dataNascimento ? <Text style={styles.erro}>{erros.dataNascimento}</Text> : null}
            <Text style={styles.inputTxt}>CPF</Text>
            <View style={styles.txtArea}>
              <TextInput
                maxLength={14}
                onChangeText={setCpf}
                value={cpf}
                style={styles.txtinput}
                placeholder=""
              />
            </View>
            {erros.cpf ? <Text style={styles.erro}>{erros.cpf}</Text> : null}
            <Text style={styles.inputTxt}>E-mail</Text>
            <View style={styles.txtArea}>
              <TextInput
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                style={styles.txtinput}
                placeholder=""
              />
            </View>
            {erros.email ? <Text style={styles.erro}>{erros.email}</Text> : null}
            <Text style={styles.inputTxt}>Senha</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                onChangeText={setSenha}
                style={styles.txtinput}
                secureTextEntry={true}
                placeholder=""
                value={senha}
              />
              <TouchableOpacity></TouchableOpacity>
            </View>
            {erros.senha ? <Text style={styles.erro}>{erros.senha}</Text> : null}
            <Text style={styles.inputTxt}>Confirmar senha</Text>
            <View style={styles.inputWithIcon}>
              <TextInput
                onChangeText={setConfSenha}
                style={styles.txtinput}
                secureTextEntry={true}
                placeholder=""
              />
              <TouchableOpacity></TouchableOpacity>
            </View>
            {erros.confSenha ? <Text style={styles.erro}>{erros.confSenha}</Text> : null}
            <View style={styles.loginArea}>
              <Text style={styles.loginTxt}>Já tem conta?</Text>
              <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.navigate('Login')}>
                <Text style={styles.loginBtnTxt}>Entrar.</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.loginBtnArea}>
              <TouchableOpacity style={styles.btnEnter} onPress={handleSalvar}>
                <Text style={styles.buttonText}>Continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
    marginTop: 5,
    width: '100%',
    marginLeft: 0,
    height: 'stretch',
    padding: 10,
  },
  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 30,
  },
  subTxt: {
    fontSize: 16,
    marginBottom: 8,
    marginLeft: 10,
    marginTop: 8,
    color: '#b5b5b5',
  },
  erro: {
    fontSize: 14,
    marginLeft: 10,
    marginTop: 2,
    color: '#118E96',
  },
  inputTxt: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
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
  txtArea: {
    width: '100%',
    height: '45',
    alignItems: 'center',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  loginArea: {
    flexDirection: 'row',
    marginTop: 0,
    marginRight: 17,
    justifyContent: 'flex-end',
    width: 'stretch',
    height: 20,
    backgroundColor: '#F1F1F1',
  },
  loginTxt: {
    fontSize: 13,
    color: '#b5b5b5',
  },
  loginBtn: {
    marginLeft: 2,
  },
  loginBtnTxt: {
    fontSize: 13,
    color: '#118E96',
  },
  loginBtnArea: {
    width: '100%',
    alignItems: 'center',
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

export default Cadastro;