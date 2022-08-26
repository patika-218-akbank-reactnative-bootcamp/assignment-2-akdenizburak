import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const UserName = ({userName}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{userName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color:"black",
        fontWeight:"700",
        fontSize:15,
    },
    container:{
        width:"45%",
    }
})

export default UserName;
