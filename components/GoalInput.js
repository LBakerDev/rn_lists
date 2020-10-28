import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native'

const GoalInput = ({ onAddGoal, visible, onCancelGoalHandler }) => {

    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = enteredText => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        onAddGoal(enteredGoal);
        setEnteredGoal('')
    }

    return (
        <Modal
            visible={visible}
            animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={goalInputHandler}
                    placeholder="Course Goal"
                    style={styles.input}
                    value={enteredGoal}
                />
                <View style={{width: '50%', flexDirection: 'row', justifyContent: 'space-around'}}>
                    <Button title="Add" onPress={() => addGoalHandler()} />
                    <Button color='red' title='Cancel' onPress={onCancelGoalHandler} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        borderRadius: 3,
        width: '80%'
    },
});

export default GoalInput;