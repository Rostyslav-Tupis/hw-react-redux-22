import React ,{useState} from "react";
import './style-form.css'
import { useDispatch } from "react-redux";

const Form = () =>{
    const [avatar, setAvatar] = useState('')
    const [name, setName] = useState('')
    const [nickname, setNickName] = useState('')
    const [postText, setPostText] = useState('')
    const [postPhoto, setPostPhoto] = useState('')

    const [valid , setValid] = useState(false)
    const [errorMessage , setErrorMessage] = useState('')
    
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();

        if(name.length >= 3  && nickname.length >= 3){
            setValid(true)
        }else{
            setValid(false)
            setErrorMessage("Name and nickname must have more than 3 characters")
            return
        }
        dispatch({
            type:"ADD_POST",
            payload:{
                author: name,
                authorImage: avatar,
                authorNickname: nickname,
                publicationDate: new Date().toLocaleDateString(),
                text: postText,
                postImage: postPhoto,
                likes: 0,
                comments: 0,
                reposts: 0,
            }
        })
        setAvatar('')
        setName('')
        setNickName('')   // для того , щоб очистити поля вводу після додавання інфи з них у STORE
        setPostText('')
        setPostPhoto('')
    }

    return(
        <div className="wrapper">
            <form className="form">
                <div className="title">Let`s create a new post !</div>
                
                <div className="avatarField">
                    <label htmlFor="avatar">Author avatar</label>
                    <input type="text" id="avatar" placeholder="Paste link to your avatar" className="avatarLink"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)
                    }/>
                </div>

                <div className="info">
                    <div className="namesInput">
                        <div className="presonalInfo">
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" placeholder="name" className="inputField" onChange={(e) => setName(e.target.value)}
                            value={name}/>
                        </div>
                        <div className="presonalInfo">
                            <label htmlFor="nickname">Your Nickname</label>
                            <input type="text" placeholder="nickname" id="nickname" className="inputField" onChange={(e) => setNickName(e.target.value)}
                            value={nickname}/>
                        </div>
                        
                    </div>
                    {valid ? null : <span className="errorMes">{errorMessage}</span>}
                </div>
                <div >
                    <textarea maxLength="300" type="text" placeholder="Type anything" className="inputField postField" 
                    onChange={(e) => setPostText(e.target.value)}
                    value={postText}/>
                </div>
                <div className="postPhoto">
                    <input type="text" placeholder="Add link to photo" className="inputField "
                    onChange={(e) => setPostPhoto(e.target.value)} 
                    value={postPhoto}/>
                </div>
                <div className="btnField">
                    <button className="btn btn-outline-light sbmBtn" onClick={handleSubmit} >Submit info</button>
                </div>
            </form>
        </div>
    )
}

export default Form