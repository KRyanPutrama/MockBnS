import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

const Post = (props) => {



    return (
        <View style={{alignItems:'center'}}>
            <View style={styles.container}>
                <Text>Post</Text>
                <TextInput 
                style={styles.box} 
                placeholder='Type Title...' 
                onChangeText={props.changeTitle} 
                value={props.titleValue} />
                <TextInput 
                style={styles.box} 
                placeholder={`What's going on `} 
                onChangeText={props.userFeed}
                value={props.userFeedValue}
                multiline={true}
                />
                <TouchableOpacity style={styles.button} onPress={props.onSubmit}>
                    <Text style={{color:'white'}} >Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    container : {
        backgroundColor: 'lightgrey', 
        width: '80%', 
        height: 250, 
        justifyContent:'space-evenly', 
        borderRadius:10,
        padding: 10,
        marginVertical: 10,
        borderWidth:5, 
        borderTopColor: 'skyblue',
        borderRightColor: 'royalblue',
        borderLeftColor: 'royalblue',
        borderBottomColor: 'navy'
        
    },
    box : {
        width:300, 
        borderWidth: 1
    },
    button: {
        backgroundColor:'navy', 
        width: 80, height:30, 
        borderRadius:10, 
        justifyContent:'center',
        alignItems:'center'
    }

})
