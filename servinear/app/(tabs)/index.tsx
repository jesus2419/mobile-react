import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  useColorScheme,
  SafeAreaView
} from 'react-native';

export default function HomeScreen() {
  const [text, setText] = useState('');
  const data = ['React Native', 'Expo', 'Components', 'State', 'Props'];
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={[styles.title, { color: isDarkMode ? '#FFF' : '#000' }]}>Bienvenido papu</Text>
        <Image source={require('@/assets/images/partial-react-logo.png')} style={styles.reactLogo} />
        
        <TextInput
          style={[styles.input, { color: isDarkMode ? '#FFF' : '#000', borderColor: isDarkMode ? '#FFF' : 'gray' }]}
          placeholder="Type something..."
          placeholderTextColor={isDarkMode ? '#CCC' : '#666'}
          value={text}
          onChangeText={setText}
        />
        <Text style={{ color: isDarkMode ? '#FFF' : '#000' }}>You typed: {text}</Text>
        
        <Button title="Press me" onPress={() => alert('Button Pressed!')} color={isDarkMode ? '#BBB' : '#007AFF'} />
        
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.listItem}>
              <Text style={{ color: isDarkMode ? '#FFF' : '#000' }}>{item}</Text>
            </TouchableOpacity>
          )}
        />
        
        <Text style={[styles.platformText, { color: isDarkMode ? '#FFF' : '#000' }]}> 
          {Platform.select({
            ios: 'Running on iOS',
            android: 'Running on Android',
            web: 'Running on Web'
          })}
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  reactLogo: {
    height: 100,
    width: 100,
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderWidth: 1,
    width: '100%',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  listItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: '100%',
    alignItems: 'center',
  },
  platformText: {
    marginTop: 16,
    fontStyle: 'italic',
  },
});
