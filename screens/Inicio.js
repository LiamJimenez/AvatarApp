import React, { useRef, useEffect, useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const images = [
  require('../assets/Portada1.jpg'),
  require('../assets/Portada2.jpg'),
  require('../assets/Portada3.jpg'),
  require('../assets/Portada4.jpg'),
  require('../assets/Portada5.jpg'),
  require('../assets/Portada6.jpg'),
];

const Inicio = ({ navigation }) => {
  const flatListRef = useRef(null);
  const currentIndex = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      currentIndex.current = (currentIndex.current + 1) % images.length;
      flatListRef.current.scrollToIndex({ index: currentIndex.current, animated: true });
      setActiveIndex(currentIndex.current);
    }, 5000); 

    return () => clearInterval(intervalId);
  }, []);

  const handleScroll = (event) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(index);
    currentIndex.current = index;
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={({ item }) => (
          <Image source={item} style={styles.background} />
        )}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
      />
      <View style={styles.indicatorContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.indicator,
              { opacity: index === activeIndex ? 1 : 0.5 },
            ]}
          />
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.topRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Personajes')}>
            <Image source={require('../assets/FotoAang.jpg')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Personajes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('AcercaDe')}>
            <Image source={require('../assets/FotoAcerca.jpeg')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Acerca de</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.middleRow}>
          <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Momentos')}>
            <Image source={require('../assets/Momentos.jpg')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Momentos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateToScreen('Contratame')}>
            <Image source={require('../assets/imagen_liam.jpg')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>Contrátame</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomRow}>
          <TouchableOpacity style={[styles.button, styles.centeredButton]} onPress={() => navigateToScreen('EnMiVida')}>
            <Image source={require('../assets/Portada1.jpg')} style={styles.buttonImage} />
            <Text style={styles.buttonText}>En mi vida</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: width,
    height: 300, 
    resizeMode: 'cover',
  },
  indicatorContainer: {
    position: 'absolute',
    top: 280,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
    margin: 5,
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: 20, 
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  middleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    padding: 10,
    borderRadius: 10,
    width: width * 0.4, 
  },
  centeredButton: {
    width: width * 0.8, 
  },
  buttonImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Inicio;




