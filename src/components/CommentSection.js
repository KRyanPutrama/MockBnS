import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { color } from 'react-native-reanimated'

const CommentSection = (props) => {
    return (
        <View style={{flexDirection:'row', marginVertical:20, marginHorizontal: 10}}>
            <TextInput placeholder='comment' style={styles.textInputContainer} onChangeText={props.commentInput} value={props.commentValue}/>
            <View style={{marginHorizontal: 10,justifyContent:'space-between'}}>
            <TouchableOpacity style={{...styles.button, backgroundColor: '#2196F3'  }}
            onPress={() => props.onSubmit()}>
                <Text>Submit</Text>
            </TouchableOpacity >
            <TouchableOpacity style={{...styles.button, backgroundColor: 'red'  }}
            onPress={() => props.onCancel()}>
                <Text>Cancel</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default CommentSection

const styles = StyleSheet.create({
    button : {
        marginVertical: 5, 
        padding: 5
    },
    textInputContainer : {
        width: '80%', 
        borderWidth: 1,
        borderTopColor: 'skyblue',
        borderRightColor: 'royalblue',
        borderLeftColor: 'royalblue',
        borderBottomColor: 'navy'
    }
})
