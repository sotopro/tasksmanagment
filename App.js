import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='add new tasks' />
          <Button title='Create' color='#424D9E' />
        </View>
      </View>
    </SafeAreaView>
  );
}