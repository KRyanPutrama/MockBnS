import React, {useState, useEffect} from 'react'
import {ScrollView, Text, View, ActivityIndicator } from 'react-native'
import Post from '../components/Post'
import Feedlist from '../components/Feedlist'
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios'
import { connect } from 'react-redux'

const Blog = (props) => {
    const [title, setTitle] = useState('')
    const [userFeed, setUserFeed] = useState('')
    const [dataObject, setDataObject] = useState([])
    const [commentText, setCommentText] = useState('')
    const [commentState, setCommentState] = useState(null)
    const [loading, setLoading] = useState(true)
    

    useEffect(async() => {
        await axios.get('http://10.0.2.2:3000/posts')
                .then(res => setDataObject(res.data))
                
        setLoading(false)
    }, [])

    if (loading) {
        return (
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <ActivityIndicator size="large" />
            </View>
        )
    }

    // console.log("dataObject current state: ",dataObject)

    const titleInputHandler = (elem) => setTitle(elem)
    const userInputHandler = (elem)=> setUserFeed(elem)
    const commentInputHandler = (elem)=> setCommentText(elem)

 const addButtonHandler = () => {
        if (title.length !== 0 && userFeed.length !== 0) {
            let tempObject = {
                userId: Math.floor(Math.random()*10000).toString(),
                id: Math.random().toString(),
                like: 0,
                title: title,
                userFeed: userFeed,
                comments : []
            } 
            // setDataObject((currentState) => [...currentState, tempObject])
            axios.post('http://10.0.2.2:3000/posts', tempObject)
                    .then(() => axios.get('http://10.0.2.2:3000/posts')
                                    .then(res => setDataObject(res.data))
                    )
            
            setTitle('')
            setUserFeed('')

        } else {
            alert('Both should have an input')
        }
    }

    const removeHandler = (itemId) => {
        axios.delete(`http://10.0.2.2:3000/posts/${itemId}`)
                .then(() => axios.get('http://10.0.2.2:3000/posts')
                                .then(res => setDataObject(res.data)))
                .catch(err => console.log(err))
        

        // setDataObject(currentState => {
        //     return currentState.filter((item) => item.id !== itemId)
        // })
    }
    
    const commentAddHandler = (itemID, i) => {
        let newPost = [...dataObject]
        let newComment = {  
            userId: Math.floor(Math.random()*10000).toString(),         
            comment: commentText, 
            idComments: Math.random().toString(),
        }
        let x = newPost.find((e) => e.id === itemID)
        x.comments.push(newComment)
        // newPost[i] = x
        // setDataObject(newPost)
        // axios.patch(`http://10.0.2.2:3000/posts`, newPost)
        axios.patch(`http://10.0.2.2:3000/posts/${itemID}`, x)
                .then(res => axios.get(`http://10.0.2.2:3000/posts`)
                                .then(res => setDataObject(res.data)))
        setCommentText('')
    }

    const addLikeHandler = (itemID) => {
        const newPost = [...dataObject]
        
        let findPost = newPost.find((data) => data.id ===itemID)
        findPost.like += 1

        axios.patch(`http://10.0.2.2:3000/posts/${itemID}`, findPost)
                .then(res => axios.get(`http://10.0.2.2:3000/posts`)
                                .then(res => setDataObject(res.data)))
    }

    return (
        <LinearGradient colors={['navy', 'royalblue','skyblue']} style={{flex:1}}>
            <ScrollView>
                <View >
                    <Post 
                    onSubmit={addButtonHandler} 
                    changeTitle={titleInputHandler} 
                    userFeed={userInputHandler} 
                    titleValue ={title} 
                    userFeedValue={userFeed}/>
                    <Text style={{fontSize:26, fontWeight:'bold', padding:10}}>Feeds</Text>
                    {dataObject.map((item, i) => (
                            <Feedlist
                            userId={item.userId}
                            key={item.id} 
                            id={item.id} 
                            title={item.title} 
                            userFeed={item.userFeed}
                            like={item.like}
                            addLike ={()=> addLikeHandler(item.id)}
                            onRemove={() => removeHandler(item.id)}  
                            onComment={()=> setCommentState(item.id)}
                            getCommentState={commentState}
                            onCancelComment={() => setCommentState(null)}
                            commentInput={commentInputHandler}
                            commentValue={commentText}
                            commentData={item.comments}
                            onSubmit={() => (commentText.length === 0) ? null : commentAddHandler(item.id, i) }
                            />
                        ))}   
                </View>
            </ScrollView>
        </LinearGradient>
    )
}

// const mapStateToProps = (state) => ({
//     blogs: state.Blogs.dataBlogs
// })

// const mapDispatchToProps = (dispatch) => ({
//     addPost: () => dispatch({type: 'ADD_BLOGS'})
// })

// export default 
export default Blog;

