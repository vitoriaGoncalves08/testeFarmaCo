import React, { useEffect } from 'react';
import { Text, SafeAreaView, StyleSheet, Image } from 'react-native';


const Splash = ({navigation}) => {
  
    useEffect(() => {
      const timer = setTimeout(() => {
        navigation.navigate('Inicial');
      }, 3000);
      
      return () => clearTimeout(timer); 
    }, [navigation]);
  
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.logo} source={require('../assets/img/icon.png')} />
        <Text style={styles.paragraph}>FARMA.CO</Text>
      </SafeAreaView>
    );
  }

  export default Splash;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#118E96',
      padding: 8
    },
    paragraph: {
      marginBottom: 10,
      color: '#FFFFFF',
      fontSize: 25,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Helvetica',
    },
    logo: {
      width: 160,
      height: 160,
      alignSelf: 'center',
    }
  });
  