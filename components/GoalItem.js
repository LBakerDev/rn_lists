import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ title }) => {
    return (
        
        <View
            style={styles.listItem}>
            <Text>{title.item.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 3
    }
})

export default GoalItem;