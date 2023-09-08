import { Surface, HStack } from '@react-native-material/core';

import React from 'react';
import { Text,StyleSheet, View } from 'react-native';

const CardPrueba = () => {
  return (


    <View style={styles.container}>
      <HStack
        fill
        center
        spacing={4}
        style={styles.centeredHStack} // Aplicar estilo para centrar el HStack
      >
        <Surface
          elevation={2}
          category="medium"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 110,
            height: 110,
          }}
        >
          <Text>Puntos ganados</Text>
        </Surface>
        <Surface
          elevation={2}
          category="medium"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 110,
            height: 110,
          }}
        >
          <Text>Reciclados</Text>
        </Surface>
        <Surface
          elevation={2}
          category="medium"
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 110,
            height: 110,
          }}
        >
          <Text>GananciasTest</Text>
        </Surface>

      </HStack>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente en el contenedor
    alignItems: 'center', // Centrar horizontalmente en el contenedor
  },
  centeredHStack: {
    justifyContent: 'center', // Centrar horizontalmente dentro del HStack
  },
});

export default CardPrueba;