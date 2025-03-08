import React from 'react';
import { useRouter } from 'expo-router'; // Importa useRouter

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

export default function LoginScreen() {
  const router = useRouter(); // Obtén el objeto router

  const handleLogin = () => {
    // Aquí iría la lógica de autenticación
    // Después de autenticar, navega a la pantalla de inicio
    router.push('/inicio');
  };
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        {/* Contenedor de la imagen circular */}
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: 'https://th.bing.com/th/id/OIP.9k-iI1BGd31nL5sjMItdAQHaHU?rs=1&pid=ImgDetMain' }} // Reemplaza con tu imagen
            style={styles.image}
          />
        </View>

        {/* Input para el usuario */}
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
        />

        {/* Input para la contraseña */}
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry // Oculta el texto de la contraseña
        />

        {/* Botón de Iniciar Sesión */}
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        {/* Botón de Registrarse */}
        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#020114', // Fondo 
    padding: 20,
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Hace la imagen circular
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#1B1A55', // Fondo  para el input
    color: '#FFF', // Texto blanco
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#1B1A55', // Color principal del botón
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: '#1B1A55', // Color secundario del botón
  },
  buttonText: {
    color: '#FFF', // Texto blanco
    fontSize: 16,
    fontWeight: 'bold',
  },
});