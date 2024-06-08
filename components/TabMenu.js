import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  MaterialCommunityIcons,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
} from '@expo/vector-icons';
import { useAuth } from '../app/contexts/AuthContext'; // Alteração aqui

const CustomTabMenuBottom = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -20,
      justifyContent: 'center',
      alignItems: 'center',
    }}
    onPress={onPress}>
    <View style={styles.customButton}>{children}</View>
  </TouchableOpacity>
);

const TabMenu = () => {
  const navigation = useNavigation();
  const { user } = useAuth(); // Alteração aqui

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          navigation.navigate('Catalogo');
        }}>
        <MaterialCommunityIcons
          style={styles.icons}
          name="home"
          size={29}
          color={'#424141'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => {
          navigation.navigate('PesquisarProduto');
        }}>
        <FontAwesome
          style={styles.icons}
          name="search"
          size={24}
          color={'#424141'}
        />
      </TouchableOpacity>
      {user && user.email === 'admin' && user.senha === '123' ? (
        <>
          <CustomTabMenuBottom onPress={() => navigation.navigate('CadastroProduto')}>
            <FontAwesome5 name="plus" size={24} color="#fff" />
          </CustomTabMenuBottom>
          <TouchableOpacity
            style={styles.tabItem}>
            <MaterialIcons
              style={styles.icons}
              name="dashboard"
              size={24}
              color={'#424141'}
            />
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            navigation.navigate('Carrinho');
          }}>
          <FontAwesome5
            style={styles.icons}
            name="shopping-cart"
            size={22}
            color={'#424141'}
          />
        </TouchableOpacity>
      )}
      {user && user.email === 'admin' && user.senha === '123' ? (
        <>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => {
              navigation.navigate('HistoricoEntrega');
            }}>
            <MaterialCommunityIcons
              style={styles.icons}
              name="order-bool-descending"
              size={27}
              color={'#424141'}
            />
          </TouchableOpacity>
        </>
      ) : (
        <>
          <TouchableOpacity
            style={styles.tabItem}
            onPress={() => {
              navigation.navigate('HistoricoPedidos');
            }}>
            <MaterialCommunityIcons
              style={styles.icons}
              name="order-bool-descending"
              size={27}
              color={'#424141'}
            />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: '#F1F1F1',
    borderRadius: 20,
    margin: 10,
    shadowColor: '#424141',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 4,
    elevation: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  customButton: {
    width: 55,
    height: 55,
    borderRadius: 35,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icons: {
    marginBottom: 8,
  },
});

export default TabMenu;
