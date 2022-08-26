import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MessageInChat = ({message,time}) => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.text}>{message}</Text>
            <Text style={styles.time}>{time}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    messageContainer:{
        maxWidth:"70%",
        width:"auto",
        height:"auto",
        marginLeft:10,
        marginTop:5,
        borderRadius:13,
        borderColor:"gray",
        borderWidth:0.3,
        backgroundColor:"white",
        flexDirection:"column",
        color:"black",
        textAlign:"center",
        padding:7
    },
    text:{
        color:"black",
        fontSize:15,
        fontWeight:"500",
        backgroundColor:"white",
        borderRadius:15,
        textAlign:"left",
        flexWrap:"wrap"
    },
    time:{
        position:"absolute",
        width:35,
        textAlign:"center",
        alignSelf:"flex-end",
        bottom:5,
        right:10
    }
})

export default MessageInChat;
