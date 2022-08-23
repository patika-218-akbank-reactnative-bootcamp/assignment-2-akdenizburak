import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomePage = () => {
    return (
        //en dıştaki container header ve content ekranlarını barındırır
        <View>
            {/* sabit kalan ana sayfanın üst bölümü */}
            <View style={styles.header}>
                {/* //headerın 3 bölümünden üstteki */}
                <View style={styles.headerTop}>
                    <Text style={styles.textEdit}>Düzenle</Text>
                    <MaterialCommunityIcons style={styles.iconNewMessage} name='square-edit-outline' size={20} color={"dodgerblue"} />
                </View>
                {/* //headerın orta bölümü */}
                <View style={styles.headerMiddle}>
                    <Text style={styles.textChats}>Sohbetler</Text>
                </View>
                {/* //headerın alt bölümü */}
                <View style={styles.headerBottom}>
                    <Text style={styles.textBroadcatsLists}>Toplu Mesaj Listeleri</Text>
                    <Text style={styles.textNewGroup}>Yeni Grup</Text>
                </View>
            </View>

            {/* //ana sayfadaki mesajları içeren scrollview */}
            <ScrollView style={styles.content}>

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "25%",
    },
    headerTop:{
        width:"100%",
        height:"30%",
        flexDirection:"row",
    },
    headerMiddle:{
        width:"100%",
        height:"40%",
    },
    headerBottom:{
        width:"100%",
        height:"30%",
        flexDirection:"row",
        borderBottomColor:"gray",
        borderBottomWidth:0.4

    },
    textEdit: {
        flexDirection: "row",
        width: "50%",
        height: "100%",
        color: "dodgerblue",
        fontSize: 15,
        padding:10
    },
    iconNewMessage: {
        flexDirection: "row",
        width: "50%",
        height: "100%",
        textAlign: "right",
        padding:10

    },
    textChats: {
        width:"50%",
        height:"100%",
        fontWeight:"bold",
        fontSize:40,
        textAlignVertical:"bottom",
        paddingLeft:10
,        color:"black",
    },
    textBroadcatsLists: {
        width:"50%",
        height:"100%",
        color:"dodgerblue",
        paddingTop:20,
        paddingLeft:10
    },
    textNewGroup: {
        width:"50%",
        color:"dodgerblue",
        height:"100%",
        paddingTop:20,
        paddingLeft:100,
        textAlign:"center"
    },
    content: {
        backgroundColor: "pink",
        width: "100%",
        height: "75%"
    }

})

export default HomePage;
