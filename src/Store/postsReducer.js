import {initialState} from './store'

const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_POST":
            return {
            ...state, //повертається той самий об`єкт , лише з зміненою властивістю posts
            posts: [
                ...state.posts,
                {
                    author: action.payload.author,
                    authorImage: action.payload.authorImage,      // це те що ми будемо змінювати після виклику функції
                    authorNickname: action.payload.authorNickname,
                    text: action.payload.text,
                    postImage: action.payload.postImage,
                    likes:0,
                    comments:0,
                    reposts:0,
                }
            ]

        };
        default:
            return state;
    }
};
export default postsReducer;