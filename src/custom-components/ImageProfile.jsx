import React from 'react'

import { ImageBackground, StyleSheet, View } from 'react-native';

const ImageProfile = () => {
    return (
        <View style={styles.container}>
        <ImageBackground
          source={require('../public/images/profile.png')} // Reemplaza <path-to-image> con la ruta de tu imagen
          style={styles.blueBox}
        >
          {/* Contenido dentro del cuadro */}
        </ImageBackground>
      </View>
    );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', 
      alignItems: 'center',
    },
    blueBox: {
      borderRadius: 95.52,
      borderWidth: 6,
      borderColor: '#FFF',
      width: 150, // Ajusta el ancho según tus necesidades
      height: 150, // Ajusta la altura según tus necesidades
      overflow: 'hidden', // Oculta cualquier contenido que se desborde del cuadro
      marginBottom: '30%',
    },
  });
  

export default ImageProfile;
