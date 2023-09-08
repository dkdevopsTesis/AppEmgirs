import React from 'react'

import { StyleSheet, View } from 'react-native';
import {Text } from 'react-native';
const CardProfile = () => {
    return (
        <View style={styles.blueBox}>
            <Text style={styles.whiteText}>JACK RYAN</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    blueBox: {
      backgroundColor: '#0F1375',
      width: 398,
      height: 213,
      justifyContent: 'center', 
      alignItems: 'center', 
  
    },
    whiteText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold', // Puedes ajustar el peso de la fuente según tus preferencias
    },
  });
  

export default CardProfile;

