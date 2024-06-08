import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { MaterialCommunityIcons, FontAwesome6 } from '@expo/vector-icons';
import TabMenu from '../components/TabMenu';
import Produto from '../components/Produtos';

const Catalogo = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.supNot}>
          <Text style={styles.hiTxt} onPress={() => navigation.navigate('Cadastro')}>Olá, usuário.</Text>
          <View style={styles.iconArea}>
            <TouchableOpacity>
              <FontAwesome6 style={styles.kartIcon} name="cart-shopping" size={20} color="#424141" />
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialCommunityIcons style={styles.bellIcon} name="bell" size={25} color="#424141" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.columnBanner}>
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

          <View style={styles.carouselArea}>
            <ScrollView horizontal={true} style={styles.carousel} showsHorizontalScrollIndicator={false}>
              <View style={styles.carouselItem}>
                <Image style={styles.bannerImg} source={require('../assets/img/Banner1.png')} />
              </View>
              <View style={styles.carouselItem}>
                <Image style={styles.bannerImg} source={require('../assets/img/Banner2.png')} />
              </View>
              <View style={styles.carouselItem}>
                <Image style={styles.bannerImg} source={require('../assets/img/Banner3.png')} />
              </View>
              <View style={styles.carouselItem}>
                <Image style={styles.bannerImg} source={require('../assets/img/Banner4.png')} />
              </View>
            </ScrollView>
          </View>

          <View style={styles.subBannerArea}>
            <Image style={styles.subBannerImg} source={require('../assets/img/subbanner.png')} />
          </View>
        </View>

        <View style={styles.tagsRow}>
          <View style={styles.tagColumns}>
            <TouchableOpacity style={styles.tags}>
              <MaterialCommunityIcons name="pill" size={32} color="#118E96" />
            </TouchableOpacity>
            <Text style={styles.tagsTxt}>Remédios</Text>
          </View>

          <View style={styles.tagColumns}>
            <TouchableOpacity style={styles.tags}>
              <MaterialCommunityIcons name="lipstick" size={32} color="#118E96" />
            </TouchableOpacity>
            <Text style={styles.tagsTxt}>Beleza</Text>
          </View>

          <View style={styles.tagColumns}>
            <TouchableOpacity style={styles.tags}>
              <MaterialCommunityIcons name="baby-carriage" size={32} color="#118E96" />
            </TouchableOpacity>
            <Text style={styles.tagsTxt}>Bêbe</Text>
          </View>

          <View style={styles.tagColumns}>
            <TouchableOpacity style={styles.tags}>
              <MaterialCommunityIcons name="shower-head" size={32} color="#118E96" />
            </TouchableOpacity>
            <Text style={styles.tagsTxt}>Higiene</Text>
          </View>
        </View>

        <View style={styles.ofertaTitlesArea}>
          <Text style={styles.ofertaTitleTxt}>
            Mega Oferta
          </Text>
          <TouchableOpacity style={styles.infoOferta}>
            <Text style={styles.infoOfertaTxt}>Saiba mais</Text>
          </TouchableOpacity>
        </View>
        <Produto/>
      </ScrollView>
      <TabMenu/>
    </SafeAreaView>
  );
}

export default Catalogo;

const styles = StyleSheet.create({
  container: {
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
  columnBanner: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
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
  placeholder: {
    fontWeight: 'bold'
  },
  carouselArea: {
    width: '100%',
    height: 200,
    marginTop: 10,
  },
  carousel: {
    width: '100%',
  },
  carouselItem: {
    width: 390,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    marginRight: 10,
    borderRadius: 5,
  },
  bannerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  subBannerArea: {
    width: 390,
    height: 115,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  subBannerImg: {
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
  tagsRow: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  tagColumns: {
    width: '24%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tags: {
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ofertaTitlesArea: {
    width: '97%',
    height: 50,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
  },
  ofertaTitleTxt: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#424141'
  },
  infoOfertaTxt: {
    fontSize: 12,
    color: '#8A8888'
  },
  prodRow: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  cardPress: {
    width: '45%',
    margin: 7,
  },
  prodBox: {
    backgroundColor: '#F8F8F8',
    width: '100%',
    height: 220,
    paddingHorizontal: 3,
    alignItems: 'center',
    shadowColor: "black",
    borderRadius: 8,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 5,
    shadowOpacity: 0.3,
    elevation: 5,
  },
  discountArea: {
    width: '100%',
    height: 'stretch',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  discountTxt: {
    backgroundColor: 'rgba(112, 149, 18, 0.2)',
    top: 5,
    marginTop: 2,
    marginRight: 2,
    borderRadius: 5,
    padding: 3,
    fontWeight: 'bold',
    color: '#4D8811',
  },
  prodImage: {
    height: '55%',
    width: '55%'
  },
  infoProdArea: {
    width: '90%'
  },
  productName: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#8A8888'
  },
  productDesc: {
    fontSize: 10,
    marginBottom: 7,
    color: '#8A8888'
  },
  productValue: {
    fontSize: 10,
    color: '#8A8888'
  },
  btnProductArea: {
    width: '90%',
    alignItems: 'flex-end',
  },
  btnProduct: {
    width: '45%',
    height: 'stretch',
    backgroundColor: '#118E96',
    alignItems: 'center',
    borderRadius: 2,
  },
  btnProductTxt: {
    fontSize: 10,
    color: '#F1F1F1',
  }
});
