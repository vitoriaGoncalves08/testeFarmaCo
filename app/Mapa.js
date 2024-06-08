import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { FontAwesome6 } from '@expo/vector-icons';

const Mapa = ({ route, navigation }) => {
  const { endereco } = route.params;

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -23.5407505,
            longitude: -46.3707727,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: -23.5407505,
              longitude: -46.3707727,
            }}
            title={endereco.nome}
            description={`${endereco.rua}, ${endereco.numero}, ${endereco.bairro}, ${endereco.cidade}`}
          />
          <Marker
            coordinate={{
              latitude: -23.53093892119277,
              longitude: -46.36891271453416,
            }}
            title={"Farma.co"}
            description={`Rua Carlos Carvalho, 200 - Ferraz de Vasconcelos/ SP`}
          />
        </MapView>
        <View style={styles.addressContainer}>
          <View style={styles.location}>
            <FontAwesome6 name="location-crosshairs" size={20} color="#B5B4B4" style={{marginTop: -15}}/>
            <Text style={styles.addressText}>
              {`Rua Carlos Carvalho, 200 - Ferraz de Vasconcelos/ SP`}
            </Text>
          </View>
          <Text style={styles.farmaText}>
            FARMA.CO
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('StatusEntrega')}>
            <Text style={styles.buttonText}>Acompanhar Pedido</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Mapa;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  addressContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    elevation: 5,
    alignItems: 'center',
    color: '#B5B4B4',
    opacity: 0.8,
  },
  location: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10, 
  },
  addressText: {
    fontSize: 16,
    marginLeft: 10,
    textAlign: 'center',
    color:'#B5B4B4',
  },
  farmaText: {
    color: '#757474',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold'
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
    textAlign: 'center'
  },
  icons: {
    width: 29,
    height: 29,
  },
});
