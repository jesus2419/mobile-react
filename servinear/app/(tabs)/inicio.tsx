import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';

const services = [
  {
    id: '1',
    title: 'Programador full stack',
    company: 'Fredancer',
    price: '$250 Hora',
    location: 'GradMaps, Nt',
  },
  {
    id: '2',
    title: 'Capítrico amateur',
    price: '$50 Hora',
    location: 'Juarez, Nt',
  },
  {
    id: '3',
    title: 'Pasteles bajo pedido',
    price: '$100 Hora',
    location: 'Montares, Nt',
  },
  {
    id: '4',
    title: 'Muestro de Cálculo y Álgebra',
    price: '$500 Hora',
    location: 'San Invidia de los gana, Nt',
  },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bienvenido</Text>
        <Text style={styles.headerDate}>Miércoles, 3 de julio</Text>
      </View>

      {/* Sección "Cerca de mí" */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Cerca de mí</Text>
        <View style={styles.sectionButtons}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Popular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Nuevo</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Lista de servicios */}
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.serviceContainer}>
            <Text style={styles.serviceTitle}>{item.title}</Text>
            {item.company && (
              <Text style={styles.serviceCompany}>{item.company}</Text>
            )}
            <Text style={styles.servicePrice}>{item.price}</Text>
            <Text style={styles.serviceLocation}>{item.location}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 16,
  },
  header: {
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerDate: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    backgroundColor: '#6200EE',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
  },
  serviceContainer: {
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceCompany: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  servicePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200EE',
    marginTop: 8,
  },
  serviceLocation: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});