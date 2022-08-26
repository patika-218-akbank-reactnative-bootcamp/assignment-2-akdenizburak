import React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import MessageContent from './MessageContent';
import ProfilePicture from './ProfilePicture';
import UserName from './UserName';

const Message = ({ imageURL, userName, message,time }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageArea}>
                <ProfilePicture imageURL={imageURL} />
            </View>
            <View style={styles.contentArea}>
                <UserName userName={userName} />
                <MessageContent message={message} />
            </View>
            <View style={styles.timetArea}>
                <Text style={styles.text}>{time}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 65,
        flexDirection: "row",

    },
    imageArea: {
        width: "20%",
        height: "100%",
    },
    contentArea: {
        width: "65%",
        height: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
        padding: 10,
    },
    timetArea:{
        width:"15%",
        height:"100%",
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
    },
    text:{
        fontSize:15,
        padding:10,
        alignSelf:"center"
    }
})

export default Message;
