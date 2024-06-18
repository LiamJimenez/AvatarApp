import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Modal, ImageBackground } from 'react-native';

const Personajes = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPersonaje, setSelectedPersonaje] = useState(null);

  const personajes = [
    {
      nombre: 'Aang',
      foto: require('../assets/FotoAang.jpg'),
      descripcion: 'Aang es el protagonista de la serie y el último maestro aire sobreviviente. Descubre que es el Avatar, el ser encargado de mantener el equilibrio entre las cuatro naciones y que puede controlar los cuatro elementos: aire, agua, tierra y fuego. Tras desaparecer por 100 años, Aang es encontrado congelado en un iceberg por Katara y Sokka. Durante la serie, Aang lucha para aprender a dominar los otros tres elementos y derrotar al Señor del Fuego Ozai para restaurar la paz en el mundo.',
    },
    {
      nombre: 'Katara',
      foto: require('../assets/FotoKatara.jpg'),
      descripcion: 'Katara es una maestra agua de la Tribu Agua del Sur. Ella y su hermano Sokka encuentran a Aang en el iceberg y se convierten en sus amigos y aliados. Katara tiene un fuerte sentido de la justicia y es una maestra agua talentosa, eventualmente convirtiéndose en una maestra agua de renombre. Su relación con Aang se desarrolla a lo largo de la serie, convirtiéndose en su pareja al final.',
    },
    {
      nombre: 'Sokka',
      foto: require('../assets/FotoSokka.jpg'),
      descripcion: 'Sokka es el hermano mayor de Katara y miembro de la Tribu Agua del Sur. Aunque no tiene habilidades de control de elementos, es ingenioso y valiente, desempeñando el papel de estratega y guerrero del grupo. Sokka es conocido por su sentido del humor, ingenio y habilidades en el combate con armas. A lo largo de la serie, demuestra ser un líder valioso y un amigo leal.',
    },
    {
      nombre: 'Zuko',
      foto: require('../assets/FotoZuko.jpg'),
      descripcion: 'Zuko es el príncipe exiliado de la Nación del Fuego, hijo del Señor del Fuego Ozai. Inicialmente, su misión es capturar al Avatar para recuperar su honor y el favor de su padre. Sin embargo, a lo largo de la serie, Zuko atraviesa una profunda transformación personal. Al final, se une a Aang y sus amigos, ayudándolos a derrotar a su padre y restaurar la paz. Zuko eventualmente se convierte en el nuevo Señor del Fuego, trabajando para traer una nueva era de paz y reconciliación.',
    },
    {
      nombre: 'Toph',
      foto: require('../assets/FotoToph.jpg'),
      descripcion: 'Toph Beifong es una maestra tierra ciega de la Nación Tierra y proviene de una familia noble. Aunque sus padres la sobreprotegen debido a su ceguera, Toph es increíblemente poderosa y autosuficiente. Desarrolla un estilo único de control de la tierra basado en las habilidades de los tejones-topo, y es la primera persona en descubrir y dominar el metalcontrol. Toph se une al grupo de Aang para ayudarlo a aprender a controlar la tierra y se convierte en una amiga cercana y aliada.',
    },
    {
      nombre: 'Suki',
      foto: require('../assets/FotoSuki.jpg'),
      descripcion: 'Suki es la líder de las Guerreras Kyoshi, un grupo de guerreras entrenadas en la Isla Kyoshi. Suki es valiente, habilidosa en combate y tiene una personalidad fuerte y decidida. Ayuda al Equipo Avatar en su lucha contra la Nación del Fuego y se convierte en un valioso aliado. Además, tiene una relación romántica con Sokka, uno de los miembros principales del Equipo Avatar.',
    },
  ];

  const mostrarDetalle = (personaje) => {
    setSelectedPersonaje(personaje);
    setModalVisible(true);
  };

  return (
    <ImageBackground source={require('../assets/PortadaPersonajes.jpeg')} style={styles.background}>
      
      <View style={styles.container}>
        {personajes.map((personaje, index) => (
          <TouchableOpacity key={index} style={styles.personajeContainer} onPress={() => mostrarDetalle(personaje)}>
            <Image source={personaje.foto} style={styles.personajeFoto} />
            <Text style={styles.personajeNombre}>{personaje.nombre}</Text>
          </TouchableOpacity>
        ))}

        {selectedPersonaje && (
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <ImageBackground source={require('../assets/PortadaPersonajes.jpeg')} style={styles.modalBackground}>
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>X</Text>
                </TouchableOpacity>
                <Image source={selectedPersonaje.foto} style={styles.modalImage} />
                <Text style={styles.modalText}>{selectedPersonaje.descripcion}</Text>
              </View>
            </ImageBackground>
          </Modal>
        )}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', 
  },
  header: {
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  headerText: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  personajeContainer: {
    margin: 10,
    alignItems: 'center',
  },
  personajeFoto: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  personajeNombre: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover', 
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    maxWidth: '80%',
  },
  closeButton: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'red',
  },
  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 150,
    marginBottom: 20,
  },
  modalText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Personajes;


