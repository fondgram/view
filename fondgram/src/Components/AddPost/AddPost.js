import React, { useContext } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { AppContext } from '../../AppContext';
import "./AddPost.css"


const AddPost = () => {
    const { lightMode, setLightMode } = useContext(AppContext);

    const handleImageChange = function () {
        return 2;
    }
    const handleFileChange = function () {
        return 2;
    }
    const handlePostSubmit = function () {
        return 3;
    }
    return (
        <section className={'add__post' + (lightMode ? " light__mode" : "")}>
            <div className='upper__part'>
                <img className='profile__image' src={require("./assets/profileSample.jpg")} alt='profile__image' />
                <input type='text' className={'whats__on__your__mind' + (lightMode ? " light__mode" : "")} name="whats__on__your__mind" placeholder="What's on your mind..." />
            </div>

            <hr />
            <div className='bottom__part'>
                <div>
                    <label className={'add__post__image' + (lightMode ? " light__mode" : "")}>
                        <input type="file" accept="image/*" />
                        <InsertPhotoIcon sx={{ fontSize: "33px", padding: "0 5px" }} onChange={handleImageChange} />
                        Image
                    </label>
                    <label className={'add__post__file' + (lightMode ? " light__mode" : "")}>
                        <input type="file" accept="*" />
                        <AttachmentIcon sx={{ fontSize: "33px", padding: "0 5px" }} onChange={handleFileChange} />
                        File
                    </label>
                </div>
                <button type='submit' name='add__post__submit' className='add__post__submit' onSubmit={handlePostSubmit}>
                    <span className='text'>
                        Post
                    </span>
                </button>
            </div>
        </section>
    )
}

export default AddPost