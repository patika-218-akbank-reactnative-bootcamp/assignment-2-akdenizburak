import React from 'react';
import { StyleSheet, Text} from 'react-native';

const MessageContent = ({message}) => {
    return (
            <Text style={styles.text}>{message}</Text>
    );
}

const styles = StyleSheet.create({
    text:{
        fontSize:13,
        color:"gray"
    }
})

export default MessageContent;
