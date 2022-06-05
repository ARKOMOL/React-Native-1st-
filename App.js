import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Countires from './Components/Countires';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to hi there  exis komol</Text>
      <Countires/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
