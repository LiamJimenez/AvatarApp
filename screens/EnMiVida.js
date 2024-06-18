import React from 'react';
import { View, StyleSheet, ImageBackground, Dimensions, Text } from 'react-native';
import WebView from 'react-native-webview';

const { width } = Dimensions.get('window');

const EnMiVida = () => {
  const videoUrl = 'https://www.youtube.com/embed/Y_Um8_x04Mc';

  return (
    <ImageBackground source={require('../assets/Portada1.jpg')} style={styles.background}>
      <View style={styles.overlay}>
        <View style={styles.titleContainer}>
          <Text style={styles.heading}>¿Porque Avatar es importante para mi?</Text>
        </View>
        <View style={styles.videoContainer}>
          <WebView
            allowsFullscreenVideo={true}
            source={{ uri: videoUrl }}
            style={styles.webview}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
  },
  titleContainer: {
    marginBottom: 20,
  },
  heading: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  videoContainer: {
    width: width * 0.9, 
    aspectRatio: 16 / 9, 
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 20,
  },
  webview: {
    flex: 1,
    width: '100%',
  },
});

export default EnMiVida;









