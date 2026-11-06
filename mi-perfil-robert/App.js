/*import { StyleSheet, Text, View, Image } from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';*/

import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, Image, Pressable, Alert, StatusBar } from 'react-native';

export default function App() {
  const mostrarAlerta = (mensaje) => {
    Alert.alert("Mensaje", mensaje);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Foto de perfil */}
        <Image 
          source={{ uri: 'https://scontent.fhex2-1.fna.fbcdn.net/v/t39.30808-6/462617896_3167297796740570_8782179957065248855_n.jpg?stp=dst-jpg_tt6&cstp=mx512x512&ctp=s512x512&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFi7ChiPp_Mel9zh0CfdTl3HhPJRgeKISgeE8lGB4ohKIIIsQhsiZxhD4WJme4geQIeQV9hXQf0dDNZaBiteAGx&_nc_ohc=NGn9es2bBkQQ7kNvwH5D3fS&_nc_oc=Adq573ngnmKBoUUxle6b56ogMwWwBFQDYSTbuxf0Sm-5WZkvwtmgXvvHpbMjHjMdOA0&_nc_zt=23&_nc_ht=scontent.fhex2-1.fna&_nc_gid=lytMWANDcjsaxh10lO7rPg&_nc_ss=7b2a8&oh=00_AQTgiyqBtvAFvv7UiF_KzBo5k-XmqhKrpOD1oY4mSGqOGg&oe=6AF2DDAC' }} 
          style={styles.avatar} 
        />

        {/* Información personal */}
        <Text style={styles.nombre}>Robert Plaza</Text>
        <Text style={styles.subtitulo}>Estudiante de Desarrollo Móvil</Text>
        <Text style={styles.descripcion}>
          Apasionado por la tecnología y aprendiendo a crear aplicaciones increíbles con React Native y Expo.
        </Text>

        {/* Badges o Habilidades */}
        <Text style={styles.seccionTitulo}>Habilidades</Text>
        <Text style={styles.badge}> JavaScript / React Native</Text>
        <Text style={styles.badge}> Expo Go</Text>

        {/* Botones Interactivos */}
        <Pressable style={styles.boton} onPress={() => mostrarAlerta("¡Gracias por contactarme!")}>
          <Text style={styles.textoBoton}>Contáctame</Text>
        </Pressable>

        <Pressable style={styles.botonSecundario} onPress={() => mostrarAlerta("Abriendo portafolio...")}>
          <Text style={styles.textoBotonSecundario}>Mi portafolio</Text>
        </Pressable>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  scrollContainer: {
    padding: 20,
    alignItems: 'center',
    paddingBottom: 40,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#007AFF',
    marginBottom: 15,
  },
  nombre: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 15,
  },
  descripcion: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  seccionTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  badge: {
    backgroundColor: '#e9ecef',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 14,
    color: '#495057',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  boton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  textoBoton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  botonSecundario: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoBotonSecundario: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  }
});