import React, { useContext } from 'react'
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { AppContext } from '../../AppContext';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Variables } from '../../Variables';
import "./AddPost.css"
import { showErrorToast } from '../../NotificationUtils';


const AddPost = () => {
    const { lightMode, setLightMode } = useContext(AppContext);
    const navigate = useNavigate();

    const handleImageChange = async () => {
        return 2;
    }
    const handleFileChange = async () => {
        return 2;
    }

    const handlePostSubmit = async (event) => {
        event.preventDefault()
        if (!localStorage.getItem("jwtToken")) {
            showErrorToast("You must be logged in to post!");
            setTimeout(() => { navigate("/login") }, 2000)
        }

        try {
            const response = await axios.post(Variables.API_URL + "", {
            });

            if (response.status === 200) {
                const token = response.data.token;
               
            }
        } catch (error) {
            var response = error.response.data;
            response.errors.forEach(error => {
                showErrorToast(error)
            });
        }
    }
    return (
        <section className={'add__post' + (lightMode ? " light__mode" : "")}>
            <div className='upper__part'>
                <img className='profile__image' src={require("./assets/profileSample.jpg")} alt='profile__image' />
                <input type='text' className={'whats__on__your__mind' + (lightMode ? " light__mode" : "")} name="whats__on__your__mind" placeholder="What's on your mind..." />
            </div>
            <hr />
            <form onSubmit={handlePostSubmit} className='bottom__part'>
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
                <button type='submit' name='add__post__submit' className='add__post__submit'>
                    <span className='text'>
                        Post
                    </span>
                </button>
            </form>
        </section>
    )
}

export default AddPost