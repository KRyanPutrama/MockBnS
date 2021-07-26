import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Card from '../components/Card'
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { color } from 'react-native-reanimated'
import {connect} from 'react-redux'



const Products = (props) => {

    const [cart, setCart] = useState(0)

    const addCartHandler = () => {
        setCart(currentState => currentState+1)
    }

    return (
        <View style={{flex:1}}>
            <View style={{alignItems: 'center', justifyContent:'center'}}>
                <Card addCart={() => props.addOrder()}/>
            </View>
            <View style={styles.cartContainer}>
                <View style={styles.Cart}>
                    <MaterialCommunityIcon name="cart-arrow-down" size={40} style={{color:'white'}} />
                </View>
                <Text style={styles.theText}>{props.order}</Text>
                
            </View>
        </View>
    )
}

const mapStateToProps = (state) => ({
    order: state.Cart.cartValue
});

const mapDispatchToProps = (dispatch) => ({
    addOrder: () =>dispatch({type: 'ADD_CART'})
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);



const styles = StyleSheet.create({
    cartContainer : { 
        alignItems:'center', 
        justifyContent:'center', 
        position:'absolute',
        bottom: 5,
        left: 5,
        padding: 10,
    },
    Cart : {
        borderWidth:5, 
        width:80, 
        height:80,
        alignItems:'center', 
        justifyContent:'center',
        borderRadius: 50,
        zIndex: 0,
        backgroundColor: 'dodgerblue',
        borderColor: 'mediumblue'
    },
    theText : {
        width: 30,
        height: 20,
        position: 'absolute',
        borderWidth: 1,
        paddingHorizontal: 5,
        bottom: 10,
        right: 5,
        zIndex: 1,
        backgroundColor: 'dodgerblue',
        color:'white',
        borderColor: 'lightblue',
        textAlign: 'center'
    }
})
