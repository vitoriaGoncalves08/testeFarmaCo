import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import Return from '../components/Return';
import BotaoCarrinho from '../components/BotaoCarrinho';
import Botao from '../components/Botao';
import TabMenu from '../components/TabMenu';

const CadastroProduto = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.topo}>
          <View style={styles.voltar}>
            <Return href={'Catalogo'} />
          </View>
          <View style={styles.iconArea}>
            <TouchableOpacity>
              <FontAwesome6
                style={styles.kartIcon}
                name="cart-shopping"
                size={20}
                color="#424141"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons
                style={styles.bellIcon}
                name="bell"
                size={25}
                color="#424141"
              />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.mainTxt}>Adicione um produto</Text>

        <Text style={styles.inputTxt}>Titulo</Text>
        <View style={styles.txtArea}>
          <TextInput style={styles.txtinput} placeholder="" />
        </View>
        <Text style={styles.inputTxt}>Sub-título</Text>
        <View style={styles.txtArea}>
          <TextInput style={styles.txtinput} placeholder="" />
        </View>
        <Text style={styles.inputTxt}>Preço Antigo</Text>
        <View style={styles.txtArea}>
          <TextInput style={styles.txtinput} placeholder="" />
        </View>
        <Text style={styles.inputTxt}>Preço Atual</Text>
        <View style={styles.txtArea}>
          <TextInput style={styles.txtinput} placeholder="" />
        </View>
        <Text style={styles.inputTxt}>Descrição</Text>
        <View style={styles.txtAreaDescricao}>
          <TextInput style={styles.txtinputDescricao} placeholder="" />
        </View>
        <Text style={styles.inputTxt}>Especificações</Text>
        <View style={styles.txtAreaDescricao}>
          <TextInput style={styles.txtinputDescricao} placeholder="" />
        </View>
      </SafeAreaView>
      <TabMenu />
    </>
  );
};

export default CadastroProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },

  iconArea: {
    width: 60,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  mainTxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 30,
  },

  inputTxt: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 10,
    marginTop: 10,
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
    marginBottom: 0,
    outline: 'none',
  },
  txtArea: {
    width: '100%',
    height: '45',
    alignItems: 'center',
  },
  txtAreaDescricao: {
    width: '98%',
    backgroundColor: '#E3E3E3',
    height: 114,
    borderRadius: 13,
    paddingLeft: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginBottom: 0,
    outline: 'none',
  },
  txtinputDescricao: {
    width: '98%',
    backgroundColor: '#E3E3E3',
    height: 114,
    borderRadius: 13,
    paddingLeft: 14,
    borderWidth: 0.5,
    borderColor: '#CCCCCE',
    color: '#4F4F4F',
    marginBottom: 0,
    outline: 'none',
  },
});
