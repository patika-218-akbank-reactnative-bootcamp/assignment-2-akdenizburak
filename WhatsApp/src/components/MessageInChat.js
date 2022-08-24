import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const MessageInChat = ({message="selaam.. Nasılsın görüşmeyeli merak ettim. sormak istedim selaam.. selaam.. Nasılsın görüşmeyeli diye sormak istedim selaam.."}) => {
    return (
        <View style={styles.messageContainer}>
            <Text style={styles.text}>{message}</Text>
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
    }
})

export default MessageInChat;
