import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TextInputMask } from 'react-native-masked-text';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const CadastroEndereco = () => {
  const [nome, setNome] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [enderecos, setEnderecos] = useState([
    {
      nome: 'Casa',
      cep: '12345-678',
      rua: 'Rua Guarujá',
      numero: '12',
      cidade: 'Cidade São Paulo',
      bairro: 'Aragua',
    },
  ]);
  const [erros, setErros] = useState({
    nome: '',
    cep: '',
    rua: '',
    numero: '',
    cidade: '',
    bairro: '',
    complemento: '',
  });
  const navigation = useNavigation();

  const validarCampos = () => {
    let errosTemp = {};

    if (!nome) {
      errosTemp.nome = 'Digite o nome';
    }

    if (!cep) {
      errosTemp.cep = 'Digite o CEP';
    }

    if (!rua) {
      errosTemp.rua = 'Digite a rua';
    }

    if (!numero) {
      errosTemp.numero = 'Digite o número';
    }

    if (!cidade) {
      errosTemp.cidade = 'Digite a cidade';
    }

    if (!bairro) {
      errosTemp.bairro = 'Digite o bairro';
    }

    setErros(errosTemp);

    return Object.keys(errosTemp).length === 0;
  };

  const salvarEndereco = () => {
    if (validarCampos()) {
      const novoEndereco = {
        nome,
        cep,
        rua,
        numero,
        cidade,
        bairro,
        complemento,
      };
      setEnderecos([...enderecos, novoEndereco]);
      navigation.navigate('Mapa', { endereco: novoEndereco });
    }
  };

  const selecionarEndereco = (endereco) => {
    navigation.navigate('Mapa', { endereco });
  };
  const voltar = () => {
    navigation.navigate('Carrinho');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.voltar} onPress={() => voltar()}>
          <AntDesign name="arrowleft" size={24} color="#424141" />
        </TouchableOpacity>
        <Text style={styles.title}>Endereço</Text>
      </View>
      <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding">
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.savedAddressContainer}>
            <TouchableOpacity
              key={1}
              style={styles.savedAddressItem}
              onPress={() => selecionarEndereco(enderecos[0])}>
              <View style={styles.savedAddressBox}>
                <FontAwesome name="map-marker" size={24} color="#118E96" />
                <Text style={styles.savedAddressText}>Endereço Salvo</Text>
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={24}
                  color="#A7A7A7"
                />
              </View>
              <View>
                <Text style={styles.infos}>{enderecos[0].nome}</Text>
                <Text
                  style={
                    styles.infos
                  }>{`${enderecos[0].rua} - ${enderecos[0].numero}, ${enderecos[0].bairro}, ${enderecos[0].cidade}`}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} value={nome} onChangeText={setNome} />
          {erros.nome ? <Text style={styles.error}>{erros.nome}</Text> : null}

          <Text style={styles.label}>CEP:</Text>
          <TextInputMask
            type={'zip-code'}
            value={cep}
            onChangeText={setCep}
            style={styles.input}
          />
          {erros.cep ? <Text style={styles.error}>{erros.cep}</Text> : null}

          <Text style={styles.label}>Rua:</Text>
          <TextInput style={styles.input} value={rua} onChangeText={setRua} />
          {erros.rua ? <Text style={styles.error}>{erros.rua}</Text> : null}

          <Text style={styles.label}>Número:</Text>
          <TextInput
            style={styles.input}
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
          />
          {erros.numero ? (
            <Text style={styles.error}>{erros.numero}</Text>
          ) : null}

          <Text style={styles.label}>Cidade:</Text>
          <TextInput
            style={styles.input}
            value={cidade}
            onChangeText={setCidade}
          />
          {erros.cidade ? (
            <Text style={styles.error}>{erros.cidade}</Text>
          ) : null}

          <Text style={styles.label}>Bairro:</Text>
          <TextInput
            style={styles.input}
            value={bairro}
            onChangeText={setBairro}
          />
          {erros.bairro ? (
            <Text style={styles.error}>{erros.bairro}</Text>
          ) : null}

          <Text style={styles.label}>Complemento:</Text>
          <TextInput
            style={styles.input}
            value={complemento}
            onChangeText={setComplemento}
          />
          {erros.complemento ? (
            <Text style={styles.error}>{erros.complemento}</Text>
          ) : null}
        </ScrollView>
        <View style={styles.loginBtnArea}>
          <TouchableOpacity style={styles.btnEnter} onPress={salvarEndereco}>
            <Text style={styles.buttonText}>Salvar Endereço</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#424141',
    flex: 1,
    textAlign: 'center',
    padding: 15,
  },

  voltar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },

  header: {
    marginTop: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 6,
    color: '#A7A7A7',
  },
  infos: {
    color: '#666666',
  },
  input: {
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
  error: {
    color: 'red',
    marginBottom: 10,
  },
  loginBtnArea: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  btnEnter: {
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  savedAddressContainer: {
    marginBottom: 20,
    backgroundColor: '#FAFAFA',
    borderRadius: 20,
  },
  savedAddressBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F1F1F1',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  savedAddressText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#A7A7A7',
    fontWeight: 'bold',
  },
  savedAddressItem: {
    padding: 10,
    shadowColor: '#424141',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
  },
});

export default CadastroEndereco;
