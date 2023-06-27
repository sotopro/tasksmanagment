import { StyleSheet, Text, View, TextInput, Button, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';

export default function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])
  const [borderColor, setBorderColor] = useState('#C5C9E7')

  const onHandlerFocus = () => {
    setBorderColor('#424D9E')
  }

  const onHandlerBlur = () => {
    setBorderColor('#C5C9E7')
  }

  const onHandlerChangeText = (text) => {
    setTask(text)
  }

  const onHandlerCreateTask = () => {
    setTasks([
      ...tasks,
      {
        id: Date.now().toString(),
        value: task
      }
    ])

    setTask('')
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
            onChangeText={onHandlerChangeText}
            value={task}
          />
          <Button disabled={task.length === 0} title='Create' color='#424D9E' onPress={onHandlerCreateTask}/>
        </View>
        <View style={styles.listContainer}>
          {
            tasks.map((item) => (
              <View style={styles.containerItem} key={item.id}>
                <Text style={styles.listItem}>{item.value}</Text>
              </View>
            ))
          }
        </View>
      </View>
    </SafeAreaView>
  );
}