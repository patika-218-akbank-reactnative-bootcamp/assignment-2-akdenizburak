import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const UserName = ({userName}) => {
    return (
        <View>
            <Text style={styles.text}>{userName}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color:"black",
        fontWeight:"700",
        fontSize:15,
    }
})

export default UserName;
