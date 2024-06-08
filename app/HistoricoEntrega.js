import React, { useState, useEffect } from 'react';
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  ScrollView,
} from 'react-native';
import TabMenu from '../components/TabMenu';

const Entrega = ({ navigation }) => {
  const [entregaData, setEntregaData] = useState([]);

  // useEffect para carregar o estado salvo do AsyncStorage quando o componente é montado
  useEffect(() => {
    const loadState = async () => {
      try {
        const storedData = await AsyncStorage.getItem('historicoReceitas');
        if (storedData) {
          setEntregaData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('Failed to load state', error);
      }
    };

    loadState();
  }, []);

  // Função para navegar de volta para a tela de catálogo
  const voltar = () => {
    navigation.navigate('Catalogo');
  };

  // Função para validar uma receita e salvar o estado no AsyncStorage
  const handleValidarReceita = async (id) => {
    const updatedData = entregaData.map((item) =>
      item.id === id ? { ...item, status: 'Receita validada' } : item
    );

    setEntregaData(updatedData);

    try {
      await AsyncStorage.setItem(
        'historicoReceitas',
        JSON.stringify(updatedData)
      );
    } catch (error) {
      console.error('Failed to save state', error);
    }
  };

  // Renderização do item de entrega
  const renderEntrega = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.status || 'Receita Enviada'}>{item.status}</Text>
        <Text style={styles.numero}>#{item.id}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.descricao}>{item.nomeProduto}</Text>
        <Text style={styles.descricao}>Quantidade: {item.quantidade}</Text>
      </View>
      <View style={styles.validarArea}>
        <TouchableOpacity
          style={[
            styles.btnValidar,
            {
              backgroundColor:
                item.status === 'Receita validada' ? 'gray' : '#118E96',
            },
          ]}
          onPress={() => handleValidarReceita(item.id)}
          disabled={item.status === 'Receita validada'}>
          <Text style={styles.btnValidarTxt}>
            {item.status === 'Receita validada'
              ? 'Receita Validada'
              : 'Validar Receita'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeContainer}>
      <ScrollView style={styles.scrollViewContent}>
        <View style={styles.supNot}>
          <Text style={styles.hiTxt}>Olá, usuário.</Text>
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
        <View style={styles.content}>
          <Text style={styles.historicoTitle}>Histórico</Text>
          <FlatList
            data={entregaData}
            renderItem={renderEntrega}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </ScrollView>
      <TabMenu />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scrollViewContent: {
    alignItems: 'center',
    padding: 8,
  },
  supNot: {
    width: '95%',
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  hiTxt: {
    fontSize: 17,
  },
  iconArea: {
    width: 60,
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kartIcon: {
    marginTop: 3,
  },
  bellIcon: {},
  content: {
    flex: 1,
    padding: 8,
  },
  historicoTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#424141',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E7E7E7',
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: '700',
    color: '#118E96',
  },
  numero: {
    fontSize: 14,
    fontWeight: '700',
    color: '#118E96',
  },
  cardBody: {
    marginBottom: 10,
  },
  descricao: {
    fontSize: 14,
    color: '#9E9E9E',
  },
  validarArea: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5,
  },
  btnValidar: {
    height: 35,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#118E96',
  },
  btnValidarTxt: {
    fontSize: 14,
    fontWeight: '500',
    color: '#fff',
  },
});

export default Entrega;