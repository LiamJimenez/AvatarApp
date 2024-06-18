// AcercaDe.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const AcercaDe = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Avatar: The Last Airbender</Text>
      <Text style={styles.text}>
        Avatar: The Last Airbender es una serie animada estadounidense creada por Michael Dante DiMartino y Bryan Konietzko.
        La serie se estrenó en Nickelodeon el 21 de febrero de 2005 y concluyó el 19 de julio de 2008.
      </Text>
      <Text style={styles.text}>
        La serie cuenta con un total de 3 temporadas (también conocidas como "libros") y 61 episodios. Cada temporada se centra
        en un elemento que el protagonista, Aang, debe dominar: agua, tierra y fuego.
      </Text>
      <Text style={styles.subtitle}>Creadores</Text>
      <Text style={styles.text}>
        Michael Dante DiMartino y Bryan Konietzko son los creadores de esta aclamada serie. Su visión y creatividad han dado vida
        a un mundo rico en cultura, personajes memorables y profundas lecciones de vida.
      </Text>
      <Image source={require('../assets/Creadores.jpg')} style={styles.image} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', 
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    textAlign: 'center',
    color: '#666', 
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    marginBottom: 10,
    width: '100%', 
    color: '#555', 
    backgroundColor: '#eaeaea', 
    padding: 10,
    borderRadius: 8,
  },
});

export default AcercaDe;




