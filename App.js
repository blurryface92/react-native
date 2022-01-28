import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Nav from './components/Nav';
import List from './components/List';

export default function App() {
  return (
    <SafeAreaView>
      <Nav />
      <List />
    </SafeAreaView>
  );
}

