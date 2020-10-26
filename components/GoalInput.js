import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

const GoalInput = ({goalInputHandler, enteredGoal, addGoalHandler}) => {
    // console.log(pro ps)
    return (
        <View style={styles.inputContainer}>
            <TextInput
                onChangeText={goalInputHandler}
                placeholder="Course Goal"
                style={styles.input}
                value={enteredGoal}
            />
            <Button title="Add" onPress={addGoalHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});

export default GoalInput;