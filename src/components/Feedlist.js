import React, {useState} from 'react'
import { Button, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import CommentSection from './CommentSection'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'

const Feedlist = (props) => {
    
    return (
        <View key={props.id} style={styles.container}>
            <View style={styles.boxEffect}>
                <View style={{flexDirection: 'row', justifyContent:'space-between', marginRight:10}}>
                    <View style={styles.avatar}>
                        <MaterialCommunityIcon name="account-circle" size={40}/>
                        <Text>{"User" + props.userId}</Text>
                    </View>
                        <TouchableOpacity onPress={props.onRemove}>
                            <Text>X</Text>
                        </TouchableOpacity>
                </View>
                <View style={styles.textWrapper} >
                    <Text style={styles.titleWrapper} >{props.title}</Text>
                    <Text style={styles.bodyText}>{props.userFeed}</Text>
                </View>
                <View style={{flexDirection:'row', justifyContent:'space-between',}}>
                    <View style={{flexDirection: 'row', alignItems:'center'}}>
                        <TouchableOpacity onPress={props.addLike} style={styles.buttonLike}>
                            <Text style={{color:'white', fontSize: 15}}>
                                Like <MaterialCommunityIcon name="thumb-up-outline" size={15} />
                            </Text>
                        </TouchableOpacity>
                        <Text style={styles.likeCounter}>{props.like}</Text>
                    </View>
                    <Button title="Comment" color="navy" onPress={props.onComment}/>
                </View>
            </View>
            { props.commentData.length !== 0 && props.commentData.map((e, i)=> 
                <View key={i} 
                style={styles.commentContainer}> 
                    <View style={styles.avatar}>
                        <MaterialCommunityIcon name="account-circle" size={20}/>
                        <Text style={styles.textWrapper}>{"User" + props.userId}</Text>
                    </View>
                    <View>
                        <Text> Said     : {e.comment}</Text>                
                    </View>
                </View>
                )
            }
            { props.getCommentState === props.id ? 
                <CommentSection 
                onCancel={props.onCancelComment}
                onSubmit={props.onSubmit}
                commentInput={props.commentInput}
                commentValue={props.commentValue}
                /> : null
            }
        </View>
    )
}

export default Feedlist

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        marginHorizontal: 35,
        borderWidth: 1,
        borderRadius: 10,
        borderTopColor: 'skyblue',
        borderRightColor: 'royalblue',
        borderLeftColor: 'royalblue',
        borderBottomColor: 'navy'
    },
    avatar: {
        flexDirection:'row',
        alignItems:'center',
    },
    textWrapper : {
        marginVertical: 10
    },
    titleWrapper : {
        fontSize: 30, 
        fontWeight:'bold', 
        marginBottom: 10
    },
    bodyText : {
        borderWidth:1, 
        padding: 10,
        borderTopColor: 'skyblue',
        borderRightColor: 'royalblue',
        borderLeftColor: 'royalblue',
        borderBottomColor: 'navy',
    },
    commentContainer : {
        marginVertical: 10, 
        marginHorizontal: 10,
        borderWidth:1, 
        padding:5,
        borderTopColor: 'skyblue',
        borderRightColor: 'royalblue',
        borderLeftColor: 'royalblue',
        borderBottomColor: 'navy'
    },
    boxEffect : {
        padding:10, 
        borderBottomWidth: 4, 
        borderBottomStartRadius:10, 
        borderBottomEndRadius: 10,
        borderBottomColor: 'lightskyblue',
    },
    buttonLike : {
        backgroundColor:'navy',
        padding:6,
    },
    likeCounter : {
        padding:5,
        borderWidth:1,
        borderTopColor: 'skyblue',
        borderRightColor: 'royalblue',
        borderLeftColor: 'royalblue',
        borderBottomColor: 'navy',
    }


})
