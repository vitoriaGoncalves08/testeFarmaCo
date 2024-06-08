import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from 'react-native';
import Return from '../components/Return';
import BotaoCarrinho from '../components/BotaoCarrinho';
import Botao from '../components/Botao';

const DetalheProduto = ({ route, navigation }) => {
  const { produto } = route.params;

  const adicionarAoCarrinho = () => {
    navigation.navigate('Carrinho', { produto });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.topo}>
          <View style={styles.voltar}>
            <Return href={'PesquisarProduto'} />
          </View>
          <View style={styles.carrinho}>
            <BotaoCarrinho href={'Carrinho'} />
          </View>
        </View>
        <View style={styles.produtotela}>
          <Image style={styles.imgproduto} source={produto.imagemProduto} />
        </View>
        <View style={styles.categoria}>
          <Text style={styles.categoriaText}>{produto.categoria}</Text>
        </View>
        <Text style={styles.nomeproduto}>{produto.nomeProduto}</Text>
        <View style={styles.avaliacaocontainer}>
          <View style={styles.estrelacontainer}>
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/estrela.png')}
            />
          </View>
          <View style={styles.reacaocontainer}>
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/coracao.png')}
            />
            <Image
              style={styles.estrelinha}
              source={require('../assets/img/compartilhar.png')}
            />
          </View>
        </View>
        <View style={styles.descontotext}>
          <Text>R$ {produto.precoAntigo}</Text>
        </View>
        <View style={styles.precotext}>
          <Text style={styles.preco}>R$ {produto.preco}</Text>
        </View>
        <View>
          <Text style={styles.title}>Descrição</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>{produto.descricao}</Text>
        </View>
        <View>
          <Text style={styles.title}>Especificações</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>{produto.especificacao}</Text>
        </View>
        <View>
          <Text style={styles.title}>Para quê serve?</Text>
        </View>
        <View style={styles.descricao}>
          <Text style={styles.paragraph}>{produto.subtitulo}</Text>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={adicionarAoCarrinho}>
          <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetalheProduto;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    padding: 8,
  },
  nomeproduto: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    paddingHorizontal: 16,
    color: '#424141',
  },
  estrelinha: {
    width: 25,
    height: 25,
  },
  avaliacaocontainer: {
    marginTop: 15,
    paddingHorizontal: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  estrelacontainer: {
    flexDirection: 'row',
  },
  reacaocontainer: {
    flexDirection: 'row',
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  voltar: {
    flexDirection: 'row',
  },
  carrinho: {
    flexDirection: 'row',
  },
  produtotela: {
    alignItems: 'center',
    marginVertical: 20,
  },
  imgproduto: {
    width: '55%',
    height: undefined,
    aspectRatio: 107 / 137, // Mantém a proporção da imagem
    resizeMode: 'contain',
  },
  descontotext: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 10,
    fontSize: 15,
    textAlign: 'left',
  },
  precotext: {
    width: '100%',
    paddingHorizontal: 16,
    fontSize: 44,
    color: '#424141',
    textAlign: 'left',
  },
  preco: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#424141',
  },
  paragraph: {
    fontSize: 15,
    textAlign: 'justify',
    flexWrap: 'wrap',
    color: '#A7A7A7',
  },
  descricao: {
    paddingHorizontal: 16,
    marginVertical: 10,
    color: '#A7A7A7',
  },
  title: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: 16,
    color: '#424141',
  },
  button: {
    backgroundColor: '#118E96',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    padding: 6,
    width: '95%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  categoria: {
    backgroundColor: '#118E96',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  categoriaText: {
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  },
});
