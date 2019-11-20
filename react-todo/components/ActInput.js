import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal} from 'react-native';


const ActInput = props => {
    const [enteredActivity, setEnteredActivity] = useState('');
    const actInputHandler = (enteredText) => {
        setEnteredActivity(enteredText);
      };
    const addActivityHandler = () =>{
        props.onAddActivity(enteredActivity);
        setEnteredActivity('');
    }
    return (
        <Modal visible={props.visible} animationType="fade">
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Enter activity"
                    style={styles.actInput}
                    onChangeText={actInputHandler}
                    value={enteredActivity}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        title="CANCEL"
                        color="red"
                        onPress={props.visibleHandler}
                    />
                    <Button 
                        title="Add"
                        onPress={addActivityHandler}
                    />

                </View>
            </View>
        </Modal>

    )
};
const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      actInput: {
        width: '80%',
        borderBottomColor: 'black', 
        borderWidth: 1, 
        padding: 10,
        marginBottom: 10
      },
      buttonContainer:{
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        width: '60%'
      }
});
export default ActInput;