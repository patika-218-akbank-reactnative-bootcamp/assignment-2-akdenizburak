import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

const ProfilePicture = ({imageURL}) => {
    return (
        <View>
            <Image style={styles.image} source={imageURL}/>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 50,
        height: 50,
        borderRadius: 50,
        margin:10
    },
})

export default ProfilePicture;
