import React, { useEffect, useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import Return from '../components/Return';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

const CheckboxRadio = ({ name, isChecked }) => {
  return (
    <View style={[styles.radio, isChecked && styles.checked]}>
      {isChecked && <FontAwesome name="circle" size={12} color="#118E96" />}
    </View>
  );
};

const Pagamento = ({ route }) => {
  const navigation = useNavigation();


  useEffect(() => {
    const getDadosSalvos = async () => {
      try {
        const dados = await AsyncStorage.getItem(route.params.dados.id);
        if (dados) {
          setDadosSalvos(JSON.parse(dados));
        }
      } catch (error) {
        console.error(
          'Erro ao recuperar os dados salvos do AsyncStorage:',
          error
        );
      }
    };

    getDadosSalvos();
  }, []);

  // Estado para armazenar o identificador do checkbox selecionado
  const [selectedOption, setSelectedOption] = useState(null);

  // Função para alterar o checkbox selecionado
  const handleCheckboxChange = (option) => {
    setSelectedOption(option);
  };

  const irEndereco = () => {
    navigation.navigate('CadastroEndereco');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.namePageArea}>
        <Return href={'Catalogo'} />
        <Text style={styles.namePage}>Pagamento</Text>
        <View></View>
      </View>

      <View style={styles.cardPag}>
        <Image
          style={styles.cardImg}
          source={require('../assets/img/card.png')}
        />
      </View>

      <View style={styles.pagArea}>
        <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          keyboardShouldPersistTaps="handled">
          <View style={styles.titlePagArea}>
            <Text style={styles.titlePag}>Escolher forma de pagamento:</Text>
          </View>
          <View style={styles.checkPagArea}>
            <TouchableOpacity
              style={[
                styles.containerRadio,
                selectedOption === 'creditCard' && styles.clickedContainer,
              ]}
              onPress={() => handleCheckboxChange('creditCard')}>
              <View style={styles.iconTxtPag}>
                <MaterialCommunityIcons
                  name="credit-card"
                  size={30}
                  color="#118E96"
                />
                <Text style={styles.pagTxt}>Cartão de crédito</Text>
              </View>
              <CheckboxRadio
                isChecked={selectedOption === 'creditCard'}
                name="creditCard"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.containerRadio,
                selectedOption === 'debitCard' && styles.clickedContainer,
              ]}
              onPress={() => handleCheckboxChange('debitCard')}>
              <View style={styles.iconTxtPag}>
                <MaterialCommunityIcons
                  name="credit-card-outline"
                  size={30}
                  color="#118E96"
                />
                <Text style={styles.pagTxt}>Cartão de débito</Text>
              </View>
              <CheckboxRadio
                isChecked={selectedOption === 'debitCard'}
                name="debitCard"
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.containerRadio,
                selectedOption === 'pix' && styles.clickedContainer,
              ]}
              onPress={() => handleCheckboxChange('pix')}>
              <View style={styles.iconTxtPag}>
                <FontAwesome6 name="pix" size={30} color="#118E96" />
                <Text style={styles.pagTxt}>PIX</Text>
              </View>
              <CheckboxRadio isChecked={selectedOption === 'pix'} name="pix" />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.containerRadio,
                selectedOption === 'cash' && styles.clickedContainer,
              ]}
              onPress={() => handleCheckboxChange('cash')}>
              <View style={styles.iconTxtPag}>
                <FontAwesome5 name="money-bill" size={26} color="#118E96" />
                <Text style={styles.pagTxt}>Dinheiro</Text>
              </View>
              <CheckboxRadio
                isChecked={selectedOption === 'cash'}
                name="cash"
              />
            </TouchableOpacity>
          </View>

          <View style={styles.trocoArea}>
            <Text style={styles.trocoTitle}>Precisa de troco?</Text>
            <TextInput style={styles.inputTroco} />
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={styles.textos}>
          <Text style={styles.preco}>Subtotal:</Text>
          <Text style={styles.preco}>R${route.params?.subTotal}</Text>
        </View>
        <View style={styles.textos}>
          <Text style={styles.preco}>Frete:</Text>
          <Text style={styles.preco}>R$ 5.00</Text>
        </View>
        <View style={styles.textos}>
          <Text style={styles.title}>TOTAL:</Text>
          <Text style={styles.title}>R$ {route.params?.subTotal + 5}</Text>
        </View>

        <TouchableOpacity style={styles.botaoPagamento} onPress={irEndereco}>
          <Text style={styles.btnTxt}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Pagamento;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F1F1F1',
    padding: 10,
  },
  namePageArea: {
    width: '90%',
    height: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  namePage: {
    fontSize: 20,
    marginRight: 15,
  },
  cardPag: {
    width: 382,
    height: 184,
    alignItems: 'center',
    marginBottom: 25,
    borderRadius: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 20,
    shadowOpacity: 0.3,
    elevation: 10,
  },
  cardImg: {
    width: 382,
    height: 184,
    opacity: 1,
  },
  pagArea: {
    width: '100%',
    height: 400,
  },
  scrollViewContent: {
    flexGrow: 1,
    padding: 10,
  },
  titlePagArea: {
    width: '100%',
    height: 30,
  },
  titlePag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424141',
  },
  checkPagArea: {
    width: '100%',
    height: 340,
  },
  containerRadio: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#A7A7A7',
    marginBottom: 15,
  },
  clickedContainer: {
    borderColor: '#118E96',
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#E7E7E7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    borderColor: '#118E96',
  },
  iconTxtPag: {
    width: '90%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 5,
  },
  pagTxt: {
    fontSize: 14,
    marginHorizontal: 20,
    marginBottom: 3,
  },
  trocoArea: {
    width: '100%',
    height: 80,
    marginBottom: 95,
  },
  trocoTitle: {
    fontSize: 16,
    color: '#A7A7A7',
  },
  inputTroco: {
    width: '100%',
    backgroundColor: '#E3E3E3',
    height: 50,
    borderRadius: 13,
    paddingLeft: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginTop: 5,
    marginBottom: 0,
    outline: 'none',
  },
  footer: {
    backgroundColor: '#eee',
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  botaoPagamento: {
    width: '95%',
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    alignItems: 'center',
    margin: 10,
  },
  btnTxt: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    marginTop: 11,
  },
  textos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 5,
    marginTop: 5,
  },
  preco: {
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
  },
  descricao: {
    fontSize: 14,
  },
});
