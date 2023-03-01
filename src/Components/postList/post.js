import React, {useState} from "react";
import './style-post.css'

const Post = ({post}) =>{
    const [likes , setLikes] = useState(post.likes)
    const [isLiked, setIsLikes] = useState(false)

    const [comments , setComments] = useState(post.comments)
    const [isComented, setIsComment] = useState(false)

    const [reposts , setRepost] = useState(post.reposts)
    const [isReposted, setIsReposted] = useState(false)

    const handleLike = ()=> {
        setLikes((prevLike)=> (prevLike + (isLiked ? -1 : 1)));
        setIsLikes(!isLiked)
    }

    const handleComment = ()=> {
        setComments((prevComm)=> (prevComm + (isComented ? -1 : 1)));
        setIsComment(!isComented)
    }

    const handleRepost = ()=>{
        setRepost((prevRep) => (prevRep + (isReposted ? -1 : 1)));
        setIsReposted(!isReposted)
    }

    return (
        <div>
            <div className="general_info">
                <img src={post.authorImage} alt="userAvatar" className="avatar"/> 
                <div className="name_nickname">
                    <h3 className="name">{post.author}</h3>
                    <span class="material-symbols-outlined verifiedPng">verified</span>
                    <h5 className="nickname">{post.authorNickname}</h5>
                    <span className="currentDate">{new Date().toLocaleDateString()}</span>
                </div>
            </div>
            <div className="post">
                <p className="text">{post.text}</p>
                <div className="content-photo">
                    <img src={post.postImage} alt="car" className="post-pict"/>
                </div>
            </div>
            <div className="statistic">
                <div className="icons" onClick={handleLike}>
                    <span  
                    className={isLiked ? "material-symbols-outlined pointer clicked" : "material-symbols-outlined pointer" }>favorite</span>
                    <span className="amountOflikes pointer" >{likes}</span>
                </div>
                <div className="icons" onClick={handleComment}>
                    <span 
                    className={isComented ? "material-symbols-outlined pointer clickedGreen" : "material-symbols-outlined pointer"}>chat</span>
                    <span className="amountOflikes pointer">{comments}</span>
                </div>
                <div className="icons" onClick={handleRepost}>
                    <span className={isReposted ? "material-symbols-outlined poiner clickedBlye" :"material-symbols-outlined poiner" }>reply</span>
                    <span className="amountOflikes pointer">{reposts}</span>
                </div>
            </div>
        </div>
    )
}
export default Post;