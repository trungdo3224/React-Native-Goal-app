import { useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image
} from 'react-native';

function GoalInput(props) {
  const { onAddGoal, onCancel } = props

  const [goalText, setGoalText] = useState('');
  function goalInputHandle(enteredText) {
    setGoalText(enteredText);
  }
  function addGoalHandler() {
    onAddGoal(goalText)
    setGoalText('')
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')} style={styles.image} />
        <TextInput
          style={styles.textInput}
          value={goalText}
          placeholder='Your course goal'
          onChangeText={goalInputHandle}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  )

}

styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  button: {
    width: 100,
    marginHorizontal: 8
  }
})

export default GoalInput
