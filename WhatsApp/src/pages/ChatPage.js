import React from 'react';
import { View, StyleSheet, TextInput, ScrollView, Pressable, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MessageInChat from '../components/MessageInChat';
import ProfilePicture from '../components/ProfilePicture';
import UserName from '../components/UserName';
import ChatList from './../components/ChatList';


const ChatPage = ({route,navigation}) => {
const {id,firstName,lastName,avatar}=route.params;
    return (
        //chat sayfasını sarmalayan View
        <View>
            {/* //chat sayfasının header bölümü */}
            <View style={styles.header}>
                <Pressable onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons style={styles.iconBack} name='chevron-left' size={35} color={"dodgerblue"} />
                </Pressable>
                <ProfilePicture style={styles.pp} imageURL={avatar} />
                <UserName userName={firstName+" "+lastName} />
                <MaterialCommunityIcons style={styles.videoCall} name='video-outline' size={28} color={"dodgerblue"} />
                <MaterialCommunityIcons style={styles.audioCall} name='phone-outline' size={25} color={"dodgerblue"} />
            </View>
            
            {/* //sohbet balonlarının bulunduğu, scrollview olan orta bölüm */}
            <FlatList
            style={styles.chat}
            data={ChatList[id-1].messages}
            renderItem={({item})=><MessageInChat message={item.text} time={item.datetime} />}
            />

            {/* //mesaj gönderilen, textinput ve send butonun olduğu footer alanı */}
            <View style={styles.sendMessage}>
                <MaterialCommunityIcons name='plus' size={30} color={"dodgerblue"} />
                <TextInput multiline={true} style={styles.textInput} />
                <MaterialCommunityIcons name='send-circle' size={35} color={"dodgerblue"} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "8%",
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        alignItems: "center",
        borderBottomColor: "gray",
        borderBottomWidth: 0.3,
        minHeight: 55,
    },
    chat: {
        width: "100%",
        height: "85%",
        backgroundColor: "#FFEEE5"
    }
    ,
    sendMessage: {
        width: "100%",
        maxHeight: "7%",
        height: "7%",
        backgroundColor: "#f9f9f9",
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 10,
    },
    textInput: {
        width: "70%",
        height: "60%",
        backgroundColor: "white",
        borderWidth: 0.1,
        borderRadius: 30,
        padding: 5,
        margin: 10,
    },
    audioCall: {
        marginLeft: 10
    },
    videoCall: {
        marginLeft: 10,
    },
})

export default ChatPage;
