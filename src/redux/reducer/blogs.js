const initialState = {
    dataBlogs : []
};

const blogs = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_BLOG':
            let tempObject = {
                userId: Math.floor(Math.random()*10000).toString(),
                id: Math.random().toString(),
                like: 0,
                title: title,
                userFeed: userFeed,
                comments : []
            } 
            return {
                ...state,
            };
        case 'GET_DATA':
            return {
                ...state,
                dataBlogs: action.data
            }
        default:
            return state;
    }
}

export default blogs;