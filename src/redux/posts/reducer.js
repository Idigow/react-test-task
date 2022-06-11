const initialState = {
    posts: [],
    total: 0,
    selectedPost: {},
    listLoad: false,
    postLoad: false,
    error: null,
};

export const posts = (state = initialState, action) => {
    switch (action.type) {
        case "posts/load/start":
            return{
                ...state,
                listLoad: true,
            }
        case "posts/load/success":
            return {
                ...state,
                listLoad: false,
                posts: action.payload.posts,
                total: action.payload.total
            }
        case "post/load/start":
            return{
                ...state,
                postLoad: true,
            }
        case "post/load/success":
            return {
                ...state,
                postLoad: false,
                selectedPost: action.payload
            }
        default:
            return {
                ...state
            }
    }
  
}



export const loadPosts = (skip = 0) =>{
    return async (dispatch) =>{
        dispatch({type: "posts/load/start"})
        const response = await fetch(`https://dummyjson.com/posts?limit=10&skip=${skip}`);
        const json = await response.json();

        dispatch({type: "posts/load/success", payload: json})
    }
}

export const loadSelectedPost = (id) =>{
    return async (dispatch) =>{
        dispatch({type: "post/load/start"})
        const response = await fetch(`https://dummyjson.com/posts/${id}`);
        const json = await response.json();

        dispatch({type: "post/load/success", payload: json})
    }
}

export const loadSearchPost = (search) =>{
    return async (dispatch) =>{
        dispatch({type: "posts/load/start"})
        const response = await fetch(`https://dummyjson.com/posts/search?q=${search}`);
        const json = await response.json();

        dispatch({type: "posts/load/success", payload: json})
    }
}