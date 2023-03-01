import { createStore } from "redux";
import postsReducer from "./postsReducer";

export const initialState ={
    posts:[
        {
        author: 'Rostyslav',
        authorImage: 'https://i.guim.co.uk/img/media/d1a8023b09fb6f46fafed7566e742e4eb5fc0c43/0_1889_3648_2189/master/3648.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=9f94239a31f81093d07216f42caf900e',
        authorNickname: '@rostyslavich',
        text: 'Hello from store',
        postImage: 'https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200',
        likes: 402,
        comments: 19,
        reposts: 49,
    },
    {
        author: 'Leonardo Dicaprio',
        authorImage: 'https://ih1.redbubble.net/image.1602700283.0991/pp,840x830-pad,1000x1000,f8f8f8.jpg',
        authorNickname: '@leoo',
        text: 'Best fellings',
        postImage: 'https://media.npr.org/assets/img/2014/01/09/twows-ff-001_wide-5c0065c587a96f670cd25c928fb6b722df598b2b.jpg',
        likes: 17294,
        comments: 1394,
        reposts: 7492,
    },
    {
        author: 'Степан Гіга',
        authorImage: 'https://bigshow.ua/wp-content/uploads/2022/10/500x500-1.jpg',
        authorNickname: '@giga',
        text: 'Привіт любі ',
        postImage: 'https://media.pogliad.ua/news/article/2017/12/08/347547/rypRHljiMGT47DymhXZU.r575x340.jpg',
        likes: 1940284,
        comments: 12842,
        reposts: 28410,
    },
]
}

let store = createStore(postsReducer,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store