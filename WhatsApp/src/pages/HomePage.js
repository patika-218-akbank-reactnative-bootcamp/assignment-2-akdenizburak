import React from 'react';
import { View, StyleSheet, Text, ScrollView, Button, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Message from '../components/Message';

const HomePage = ({ navigation }) => {
    return (
        //en dıştaki container header ve content ekranlarını barındırır
        <View>
            {/* sabit kalan ana sayfanın üst bölümü */}
            <View style={styles.header}>
                {/* //headerın 3 bölümünden üstteki */}
                <View style={styles.headerTop}>
                    <Text style={styles.textEdit}>Düzenle</Text>
                    <MaterialCommunityIcons style={styles.iconNewMessage} name='square-edit-outline' size={22} color={"dodgerblue"} />
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
                <Pressable onPress={() => navigation.navigate('Chat')}>
                    <Message imageURL={require("../assets/images/avatar.jpg")} userName={"Burak"} message={"Selam. Nasılsın?"} />
                </Pressable>
                <Message imageURL={require("../assets/images/avatar1.jpg")} userName={"Enes"} message={"Proje nasıl gidiyor?"} />
                <Message imageURL={require("../assets/images/avatar2.jpg")} userName={"Deniz"} message={"Uzun zamandır görüşemiyoruz.."} />
                <Message imageURL={require("../assets/images/avatar3.jpg")} userName={"Kübra"} message={"Söylemem gereken şeyler var."} />
                <Message imageURL={require("../assets/images/photo1.jpg")} userName={"Cemil"} message={"Akşam planın var mı?"} />
                <Message imageURL={require("../assets/images/photo8.jpg")} userName={"Kübra"} message={"Bugün erken çıkacağım. Haberin olsun"} />
                <Message imageURL={require("../assets/images/photo3.jpg")} userName={"Salih"} message={"Garip bir hata alıyoeum yardımcı olu musun?"} />
                <Message imageURL={require("../assets/images/photo4.jpg")} userName={"Çağrı"} message={"Babamlarla konusup sana haber vereceğim"} />
                <Message imageURL={require("../assets/images/photo5.jpg")} userName={"Berke"} message={"Kanka ne zaman çıkıyoruz"} />
                <Message imageURL={require("../assets/images/photo6.jpg")} userName={"Ömer"} message={"Selam. Nasılsın?"} />
                <Message imageURL={require("../assets/images/photo7.jpg")} userName={"Deniz"} message={"Bu küçük işlere ben bakarım zaten"} />
            </ScrollView>
        </View>
    );
}

//stiller
const styles = StyleSheet.create({
    header: {
        width: "100%",
        height: "25%",
    },
    headerTop: {
        width: "100%",
        height: "30%",
        flexDirection: "row",
    },
    headerMiddle: {
        width: "100%",
        height: "40%",
    },
    headerBottom: {
        width: "100%",
        height: "30%",
        flexDirection: "row",
        borderBottomColor: "gray",
        borderBottomWidth: 0.4

    },
    textEdit: {
        flexDirection: "row",
        width: "50%",
        height: "100%",
        color: "dodgerblue",
        fontSize: 17,
        padding: 10
    },
    iconNewMessage: {
        flexDirection: "row",
        width: "50%",
        height: "100%",
        textAlign: "right",
        padding: 10

    },
    textChats: {
        width: "50%",
        height: "100%",
        fontWeight: "bold",
        fontSize: 40,
        textAlignVertical: "bottom",
        paddingLeft: 10
        , color: "black",
    },
    textBroadcatsLists: {
        width: "50%",
        height: "100%",
        color: "dodgerblue",
        paddingTop: 20,
        paddingLeft: 10,
        fontSize: 17
    },
    textNewGroup: {
        width: "50%",
        color: "dodgerblue",
        height: "100%",
        paddingTop: 20,
        paddingLeft: 90,
        textAlign: "center",
        fontSize: 17
    },
    content: {
        width: "100%",
        height: "75%",
    }
    
})

export default HomePage;
