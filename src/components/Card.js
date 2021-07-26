import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,Image } from 'react-native'

const Card = (props) => {
    return (
        <View style={styles.container}>
        <Image 
        style={{width:200, height: 200}}
        source={{uri:'https://media.istockphoto.com/photos/modern-laptop-with-empty-screen-on-white-background-mockup-design-picture-id1182241805?k=6&m=1182241805&s=612x612&w=0&h=ynwW02nSQpJvF81rDNpRm0BTfR2IRSlD0qzT2UZkFPk='}} />
        <Text style={{fontWeight:'bold'}}>Nama Barang</Text>
        <Text style={{color:'orange'}}>Rp. xxx.xxx.xxx</Text>
        <TouchableOpacity style={styles.touchButton} onPress={props.addCart}>
            <Text style={{color:'white'}}>Beli</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Card

const styles = StyleSheet.create ({
    container :{
        width: 250,
        height: 300,
        backgroundColor: '#dcdcdc', 
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    touchButton : {
        backgroundColor: 'deepskyblue',
        width: 200,
        height: 30,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center',
    }
})