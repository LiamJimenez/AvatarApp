// Contratame.js
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Contratame = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:liammarcos45@gmail.com');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Contáctame</Text>
        <Image source={require('../assets/imagen_liam.jpg')} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <FontAwesome name="user" size={24} color="#000" />
        <Text style={styles.contactText}>Liam Marcos Jimenez Perez</Text>
      </View>
      <View style={styles.infoContainer}>
        <FontAwesome name="envelope" size={24} color="#000" />
        <Text style={styles.contactText}>liammarcos45@gmail.com</Text>
      </View>
      <View style={styles.infoContainer}>
        <FontAwesome name="phone" size={24} color="#000" />
        <Text style={styles.contactText}>+1 (829) 586-9008</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleEmailPress}>
        <Text style={styles.buttonText}>Enviar Correo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e8b57',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#2e8b57',
    marginBottom: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  contactText: {
    fontSize: 20,
    marginLeft: 10,
    color: '#000',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: '#2e8b57',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Contratame;

