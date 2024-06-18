import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, ScrollView } from 'react-native';
import { WebView } from 'react-native-webview';

const Momentos = () => {
  const momentos = [
    {
      id: 1,
      titulo: 'Toph crea el metal control',
      foto: require('../assets/Momento1.jpg'),
      descripcion: 'Toph inventa la técnica de metal control en el Libro 2: Tierra, episodio 19 titulado "El guru". En este episodio, Toph descubre cómo extender su habilidad de control de tierra para manipular metal, un avance significativo en la maestría de la tierra.',
      video: 'https://www.youtube.com/embed/YFnVWEn6msc',
    },
    {
      id: 2,
      titulo: 'Zuko vs Azula',
      foto: require('../assets/Momento2.jpg'),
      descripcion: 'En el episodio 20 del Libro 3 de "Avatar: The Last Airbender", titulado "Sozin Comet Part 3: Into the Inferno", Zuko y Azula tienen su épica batalla final. Este enfrentamiento se desarrolla durante la llegada del cometa de Sozin, que potencia las habilidades de fuego de ambos hermanos. La confrontación es intensa y emocional, marcada por la habilidad y la estrategia de Zuko contra la destreza letal pero desequilibrada mentalmente de Azula.',
      video: 'https://www.youtube.com/embed/Ae9VB_Cf5RM?si=zaHihcXNvQ0_-vFp',
    },
    {
      id: 3,
      titulo: 'Aang vs Ozai',
      foto: require('../assets/Momento3.jpg'),
      descripcion: 'La batalla entre Aang y Ozai es el clímax de la serie "Avatar: la Leyenda de Aang". Se desarrolla en los episodios finales del Libro 3. Aang, el Avatar, enfrenta a Ozai, el Señor del Fuego y su némesis, en un enfrentamiento épico que decide el destino del mundo. Aang, decidido a derrotar a Ozai sin recurrir a matarlo, utiliza su dominio de los cuatro elementos y finalmente desbloquea su habilidad de dominar el Avatar Estado. En una lucha intensa y visualmente impresionante, Aang logra usar su poder para neutralizar a Ozai y restaurar el equilibrio en el mundo, demostrando así el verdadero poder y la responsabilidad de ser el Avatar.',
      video: 'https://www.youtube.com/embed/kXShLPXfWZA',
    },
  ];

  const [selectedMomento, setSelectedMomento] = useState(null);

  const mostrarDetalle = (momento) => {
    setSelectedMomento(momento);
  };

  const cerrarDetalle = () => {
    setSelectedMomento(null);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/FondoMoment.jpeg')} style={styles.backgroundImage} />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {momentos.map((momento, index) => (
          <TouchableOpacity key={index} style={styles.momentoContainer} onPress={() => mostrarDetalle(momento)}>
            <Image source={momento.foto} style={styles.momentoFoto} />
            <Text style={[styles.momentoTitulo, selectedMomento && selectedMomento.id === momento.id ? styles.selectedTitulo : styles.unselectedTitulo]}>
              {momento.titulo}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Modal visible={selectedMomento !== null} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedMomento && (
            <ScrollView contentContainerStyle={styles.modalContent}>
              <Image source={selectedMomento.foto} style={styles.modalFoto} />
              <Text style={styles.modalTitulo}>{selectedMomento.titulo}</Text>
              <Text style={styles.modalDescripcion}>{selectedMomento.descripcion}</Text>
              <View style={styles.videoContainer}>
                <WebView
                  style={styles.video}
                  javaScriptEnabled={true}
                  domStorageEnabled={true}
                  source={{ uri: selectedMomento.video }}
                />
              </View>
              <TouchableOpacity style={styles.cerrarButton} onPress={cerrarDetalle}>
                <Text style={styles.cerrarButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </ScrollView>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: -1,
  },
  momentoContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  momentoFoto: {
    width: 150,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  momentoTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  unselectedTitulo: {
    color: '#000', 
  },
  selectedTitulo: {
    color: '#fff', 
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalContent: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  modalFoto: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalDescripcion: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  videoContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  video: {
    flex: 1,
  },
  cerrarButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#000',
    borderRadius: 5,
  },
  cerrarButtonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Momentos;



