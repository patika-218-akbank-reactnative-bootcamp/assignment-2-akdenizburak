import React from 'react';
import { View, StyleSheet} from 'react-native';
import MessageContent from './MessageContent';
import ProfilePicture from './ProfilePicture';
import UserName from './UserName';

const Message = ({ imageURL, userName, message }) => {
    return (
        <View style={styles.container}>
            <View style={styles.imageArea}>
                <ProfilePicture imageURL={imageURL} />
            </View>
            <View style={styles.contentArea}>
                <UserName userName={userName} />
                <MessageContent message={message} />
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
        width: "80%",
        height: "100%",
        borderBottomColor: "gray",
        borderBottomWidth: 0.2,
        padding: 10,
    },
})

export default Message;
