import React from 'react';
import { Text, StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Linking, Dimensions } from 'react-native';
import BotaoCarrinho from '../components/BotaoCarrinho';
import Return from '../components/Return';
import Botao from '../components/Botao';

const { width, height } = Dimensions.get('window');

const EnviarReceita = ({ navigation, route }) => {
  const numeroWhatsApp = '+5511943658985';

  const abrirWhatsApp = () => {
    const url = `whatsapp://send?phone=${numeroWhatsApp}`;
    Linking.openURL(url).catch(() => {
      alert('Para enviar uma mensagem, você precisa ter o WhatsApp instalado no seu dispositivo');
    });
  };

   const irPagamento = () => {
      navigation.navigate('Pagamento', {subTotal: route.params?.subTotal})
  }  


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topo}>
        <View style={styles.voltar}>
          <Return href={'Carrinho'} />
        </View>
      </View>
      <View style={styles.textosaviso}>
        <Text style={styles.aviso}>
          Receita Necessária para este Medicamento!
        </Text>
        <View style={styles.descricaoaviso}>
          <Text style={styles.paragraph}>
            Este produto exige receita médica, entre em contato
            conosco para validação
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.quadroaviso}>
          <Text style={styles.titulo}>Envie uma imagem legível da receita para nosso farmacêutico via WhatsApp:</Text>
          <Text style={styles.descaviso}>Após o envio e a validação da receita, seu pedido será processado e enviado!</Text>
         
          <TouchableOpacity onPress={abrirWhatsApp}>
            <Image style={styles.logowhatsapp} source={require('../assets/img/whatsapp.png')} />
          </TouchableOpacity>
        </View>
      </View>

     <TouchableOpacity style={styles.botaoPagamento} onPress={irPagamento}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default EnviarReceita;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', 
  },
  topo: {
    width: '100%',
    flexDirection: 'row',
    marginTop: height * 0.04,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  textosaviso: {
    marginTop: height * 0.05,
  },
  aviso: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: width * 0.06,
    marginVertical: 10,
    paddingHorizontal: 16,
  },
  descricaoaviso: {
    fontSize: width * 0.05,
    paddingHorizontal: 16,
    marginVertical: 10,
  },
  paragraph: {
    fontSize: width * 0.045,
    textAlign: 'center',
    flexWrap: 'wrap',
  },
  quadroaviso: {
    marginTop: height * 0.02,
    width: width * 0.9,
    backgroundColor: '#fff',
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
    paddingVertical: height * 0.04,
    paddingHorizontal: width * 0.05,
    borderRadius: 10,
  },
  titulo: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#118E96',
    fontSize: width * 0.04,
    marginVertical: 15,
  },
  descaviso: {
    textAlign: 'center',
    fontSize: width * 0.03,
    marginTop: height * 0.02,
    paddingHorizontal: 16,
  },
  logowhatsapp: {
    marginTop: height * 0.01,
    width: width * 0.25,
    height: width * 0.24,
  },
  botaocontinuar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginVertical: height * 0.05,
  },
  botaoPagamento: {
    width: '95%',
    height: 45,
    borderRadius: 20,
    backgroundColor: '#118E96',
    justifyContent: 'center',
    margin: 10,
    color: '#fff',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});
