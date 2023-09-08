
import React from 'react'
import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native';

import CheckBox from 'react-native-check-box'

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'white', // Fondo blanco para cada elemento
        padding: 10, // Espacio de relleno
        borderBottomWidth: 1, // Línea divisoria inferior
        borderColor: '#ccc', // Color de la línea divisoria
    },
});


const ListObjectRecycle = () => {


    const styles = StyleSheet.create({
        listItem: {
          borderBottomWidth: 1,
          borderColor: '#ccc',
        },
        itemContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between', // Alinea elementos a la izquierda y derecha
          alignItems: 'center',
          backgroundColor: 'white',
          padding: 10,
        },
        itemText: {
          flex: 1, // Hace que el texto ocupe el espacio disponible
        },
        checkbox: {
          marginLeft: 10, // Espacio entre el texto y el checkbox
        },
      });

    toggleItemSelection = (index) => {
        const items = [...this.state.items];
        items[index].selected = !items[index].selected;
        this.setState({ items });
    };

    state = {
        items: ['Papel', 'Carton', 'Plastico', 'Vidrio'],
        showModal: false,
        selectedOption: '', // Almacenará la opción seleccionada para mostrarla en el modal
        selectedOptions: [],
    };
    return (
        <FlatList
            data={this.state.items}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.listItem} // Aplicar estilo a cada elemento de la lista
                    onPress={() => this.openModal(item)}
                >
  <View style={styles.itemContainer}>
                    <Text>{item}</Text>
                    <CheckBox
                        value={item.selected}
                        onValueChange={() => this.toggleItemSelection(index)}
                    />

</View>
                </TouchableOpacity>
            )}
        />
    )
}



export default ListObjectRecycle