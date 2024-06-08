import React from 'react';
import { StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";



const Return = ({href}) =>{
  const navigation = useNavigation();

  return(
  <TouchableOpacity style={styles.rtn}
    onPress={() => navigation.navigate(href)}>
    <Image style={styles.rtnbtn} source={require('../assets/img/return.png')} />
  </TouchableOpacity>
  );
}

export default Return;

const styles = StyleSheet.create({
    rtnbtn:{
    width: 20,
    height: 20,
    marginBottom: 20,
    marginLeft:10, 
  },
})