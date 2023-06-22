import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7')
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput 
            style={[styles.input, { borderColor: borderColor}]} 
            placeholder='add new tasks'
            autoCapitalize='none'
            autoCorrect={false}
            cursorColor='#424D9E'
            selectionColor='#D4D7ED'
            placeholderTextColor='#C5C9E7'
            onFocus={onHandlerFocus}
            onBlur={onHandlerBlur}
          />
          <Button title='Create' color='#424D9E' />
        </View>
      </View>
    </SafeAreaView>
  );
}