import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = ({ title, onDelete, id }) => {
    console.log(id)
    return (
        <TouchableOpacity activeOpacity={.5} onPress={onDelete.bind(this, id)}>
            <View
                style={styles.listItem}>
                <Text>{title.item.value}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 3,
    }
})

export default GoalItem;