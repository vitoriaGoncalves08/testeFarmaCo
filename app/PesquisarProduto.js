import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Image, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Produto from '../components/Produtos';
import TabMenu from '../components/TabMenu';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

const PesquisarProduto = () => {
  const navigation = useNavigation();
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleFilterPress = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.supNot}>
            <View style={styles.hiArea}>
              <Text style={styles.hiTxt}>Olá, usuário</Text>
            </View>

            <View style={styles.notArea}>
              <TouchableOpacity
                style={styles.iconSup}
                onPress={() => navigation.navigate('Carrinho')}
              >
                <Image style={styles.kartIcon} source={require('../assets/img/carrinho.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconSup}>
                <Image style={styles.notIcon} source={require('../assets/img/notification.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputIcon}>
            <View style={styles.searchContainer}>
              <FontAwesome style={styles.searchBtn} name="search" size={20} color={'#A7A7A7'} />
              <TextInput
                style={styles.searchBox}
                placeholder='Busque seu produto'
                placeholderStyle={styles.placeholder}
              />
            </View>
          </View>

          <View style={styles.filters}>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Com receita')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Com receita' && styles.selectedFilterText]}>
                Com receita
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Sem receita')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Sem receita' && styles.selectedFilterText]}>
                Sem receita
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Bebê')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Bebê' && styles.selectedFilterText]}>
                Bebê
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Beleza')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Beleza' && styles.selectedFilterText]}>
                Beleza
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => handleFilterPress('Higiene')}
            >
              <Text style={[styles.filterText, selectedFilter === 'Higiene' && styles.selectedFilterText]}>
                Higiene
              </Text>
            </TouchableOpacity>
          </View>
          <Produto />
        </ScrollView>
      </SafeAreaView>
      <TabMenu/>
      </>
  );
}

export default PesquisarProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scrollContent: {
    alignItems: 'center',
    padding: 8,
  },
  supNot: {
    width: '95%',
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  hiArea: {
    width: '55%',
    alignContent: 'start',
    justifyContent: 'center',
  },
  hiTxt: {
    fontSize: 17,
  },
  notArea: {
    width: '45%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  iconSup: {
    marginRight: 14,
  },
  kartIcon: {
    width: 25,
    height: 25,
  },
  notIcon: {
    width: 25,
    height: 25,
  },
  searchBtn: {
    width: 18,
    height: 18,
    position: 'absolute',
    left: 18,
    marginTop: -9,
  },
  placeholder: {
    fontWeight: 'bold',
  },
  filters: {
    width: '90%',
    marginTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterButton: {
    alignItems: 'center',
  },
  filterText: {
    fontSize: 17,
    color: 'black',
    textDecorationLine: 'none',
  },
  selectedFilterText: {
    color: '#118E96',
    textDecorationLine: 'underline',
  },
  inputIcon: {
    width: '95%',
    height: 40,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9D9D9',
    borderRadius: 7,
    paddingLeft: 10,
  },
  searchBtn: {
    marginRight: 10,
    top: 0,
  },
  searchBox: {
    width: '100%',
    height: 40,
    fontSize: 13,
    color: 'black',
  },
});
