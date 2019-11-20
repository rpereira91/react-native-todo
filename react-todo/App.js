import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';


export default function App() {
  const [enteredActivity, setEnteredActivity] = useState('');
  const [activities, setActivities] = useState([])
  const actInputHandler = (enteredText) => {
    setEnteredActivity(enteredText);
  };
  const addActivityHandler = () => {
    setActivities([...activities, enteredActivity]);
  };
  return (
    <View style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter activity"
          style={styles.actInput}
          onChangeText={actInputHandler}
          value={enteredActivity}
          />
        <Button 
        title="Add"
        onPress={addActivityHandler}
        />
      </View>
      <View>
        {activities.map((act) => 
        <View style={styles.listItem}>
          <Text key={act}>{act}</Text>
        </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  actInput: {
    width: '80%',
    borderBottomColor: 'black', 
    borderWidth: 1, 
    padding: 10
  }, 
  listItem: {
    padding: 10,
    margin: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
