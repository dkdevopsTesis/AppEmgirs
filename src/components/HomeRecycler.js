import React, { useState } from 'react'
import CardPrueba from './CardPrueba'


import CardProfile from '../custom-components/CardProfile';
import ImageProfile from '../custom-components/ImageProfile';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, FlatList, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import ListObjectRecycle from '../custom-components/ListObjectRecycle';

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: 'white', // Fondo blanco para cada elemento
        padding: 10, // Espacio de relleno
        borderBottomWidth: 1, // Línea divisoria inferior
        borderColor: '#ccc', // Color de la línea divisoria
    },
    blueButton: {
        backgroundColor: '#0F1375',
        padding: 10,
        alignItems: 'center',
        marginTop: 20, // Añade margen superior para separar del texto anterior
        width: '75%', // Ocupa el 75% del ancho del contenedor
        borderRadius: 100,
        justifyContent: 'center'
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default class HomeRecycler extends React.Component {

    state = {
        items: ['Reciclador', 'Ubicaciones', 'Entregas'],
        showModal: false,
        selectedOption: '', // Almacenará la opción seleccionada para mostrarla en el modal
    };

    // Función para abrir el modal y establecer la opción seleccionada
    openModal = (item) => {
        this.setState({
            showModal: true,
            selectedOption: item,
        });
    };

    // Función para cerrar el modal
    closeModal = () => {
        this.setState({
            showModal: false,
            selectedOption: '',
        });
    };


    render() {

        return (

            <>
                <CardProfile></CardProfile>
                <ImageProfile></ImageProfile>
                <CardPrueba></CardPrueba>
                <View>
                    <FlatList
                        data={this.state.items}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.listItem} // Aplicar estilo a cada elemento de la lista
                                onPress={() => this.openModal(item)}
                            >
                                <Text>{item}</Text>
                                <Icon name="home" size={20} color="black" />
                            </TouchableOpacity>
                        )}
                    />
                    <Modal
                        visible={this.state.showModal}
                        animationType="slide"
                        transparent={false}
                    >
                        <View>
                            <Text>Opción seleccionada: {this.state.selectedOption}</Text>
                            <ListObjectRecycle></ListObjectRecycle>
                            <TouchableOpacity onPress={this.closeModal} style={styles.blueButton} >
                                <Text style={styles.buttonText}>Confirmar</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>
            </>

        );
    }


}

