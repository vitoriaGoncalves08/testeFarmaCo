import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import TabMenu from '../components/TabMenu';
import { useNavigation } from '@react-navigation/native';

const StatusEntrega = () => {
  const navigation = useNavigation();
  const voltar = () => {
    navigation.navigate('CadastroEndereco');
  };
  return (
    <>
     <SafeAreaView style={styles.safeContainer}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.voltar} onPress={() => voltar()}>
          <AntDesign name="arrowleft" size={24} color="#424141" />
        </TouchableOpacity>
        <Text style={styles.title}>Status da entrega</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.subtitle}>Detalhes da entrega</Text>
        <View style={styles.statusContainer}>
          <Text style={styles.id}>Id:00234</Text>
          <View style={styles.statusItem}>
            <View style={styles.checkContainer}>
              <AntDesign name="checkcircle" size={24} color="#A7A7A7" />
            </View>
            <Text style={styles.statusText}>Verificação de receita</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={styles.checkContainer}>
              <AntDesign name="checkcircle" size={24} color="#A7A7A7" />
            </View>
            <Text style={styles.statusText}>Produto em separação</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={styles.checkContainer}>
              <AntDesign name="checkcircle" size={24} color="#A7A7A7" />
            </View>
            <Text style={styles.statusText}>
              Produto coletado pelo entregador
            </Text>
          </View>
          <View style={styles.statusItem}>
            <View style={styles.checkContainer}>
              <AntDesign name="checkcircle" size={24} color="#A7A7A7" />
            </View>
            <Text style={styles.statusText}>Produto em rota de entrega</Text>
          </View>
          <View style={styles.statusItem}>
            <View style={styles.checkContainer}>
              <AntDesign name="checkcircle" size={24} color="#A7A7A7" />
            </View>
            <Text style={styles.statusText}>
              Motorista aguardando pagamento
            </Text>
          </View>
          <View style={styles.statusItem}>
            <View style={styles.checkContainer}>
              <AntDesign name="checkcircle" size={24} color="#A7A7A7" />
            </View>
            <Text style={styles.statusText}>Produto entregue</Text>
          </View>
        </View>
        <View style={styles.loginBtnArea}>
          <TouchableOpacity style={styles.btnEnter}>
            <Text style={styles.buttonText}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TabMenu />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#424141',
    flex: 1,
    textAlign: 'center',
    padding: 15,
  },
  subtitle:{
    margin:15,
  },
  voltar: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  header: {
    marginTop: 20,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#424141',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
  },
  statusContainer: {
    marginTop: 20,
    backgroundColor: '#F0F0F0',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 10,
  },
  id: {
    textAlign: 'right',
    color: '#A7A7A7',
    fontWeight: 'bold',
    margin: 15,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
  },
  checkContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#EFEFEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  statusText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#424141',
  },
  loginBtnArea: {
    width: '95%',
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 130,
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
});

export default StatusEntrega;
