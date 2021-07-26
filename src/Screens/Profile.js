import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { connect } from 'react-redux'

const Profile = (props) => {
    return (
        <View style={{flex:1}}>
            <View style={styles.cardAvatar}>
                <View style={styles.Avatar}>
                    <MaterialCommunityIcon name="account" color='white' size={50} />
                </View>
                <View style={styles.cardText}>
                    <View style={{
                        borderWidth:1, 
                        marginLeft:40,
                        borderTopWidth:20,
                        borderTopColor:'dodgerblue',
                        borderTopEndRadius:30
                        }}>
                        <Text style={{marginLeft:20, fontSize:20}}>USER1234</Text>
                    </View>
                    <View style={{
                        borderTopWidth:20
                        }}>
                        <Text>Profile Screen</Text>
                    </View>
                </View>
            </View>
            <Button title='LOGOUT' color='red' onPress={() => props.logout()}/>
        </View>
    )
}
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch({type: 'LOGOUT'})
})

export default connect('', mapDispatchToProps) (Profile)

const styles = StyleSheet.create({
    cardAvatar : {
        position:'absolute',
        top: 50,
        left: 50,
        width: 300,
        height: 500, 
        borderWidth:1,

    },
    cardText : {
        borderWidth:1,

    },
    Avatar : {
        borderWidth:1, 
        width:60,
        height:60, 
        borderRadius:50, 
        alignItems:'center',
        position: 'absolute',
        backgroundColor: 'dodgerblue',
        zIndex: 1
    },
    cardTextTitle : {
        borderWidth:1,
        paddingVertical: 20
    }
})
