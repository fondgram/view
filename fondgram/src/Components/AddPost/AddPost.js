import React, { useContext, useState } from 'react'
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
    const [postContent, setPostContent] = useState("")
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
            return;
        }
        const imageFile = event.target.files ? event.target.files.length[0] : null; // Get the selected image file
        if (!imageFile && postContent === "") {
            showErrorToast("Post can't be empty!")
            return;
        }

        if (postContent === "") {
            postContent = "posting..."
        }

        try {
            const response = await axios.post(Variables.API_URL + "post/post",
                {
                    content: postContent
                }, {
                headers: {
                    'Authorization': localStorage.getItem("jwtToken"),
                },
            });

            if (response.status === 200) {
                // Handle the successful response here
            }
        } catch (error) {
            var response = error.response.data;
            response.errors.forEach(error => {
                showErrorToast(error);
            });
        };

        if (!imageFile && postContent === "") {
            return;
        }

        const formData = new FormData();
        formData.append('image', imageFile);

        try {
            const response = await axios.post(Variables.API_URL + "post/UploadImage", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
                    'Authorization': localStorage.getItem("jwtToken"), // Include any authorization token if required
                },
            });

            if (response.status === 200) {
                // Handle the successful response here
            }
        } catch (error) {
            var response = error.response.data;
            response.errors.forEach(error => {
                showErrorToast(error);
            });

        };

    }

    return (
        <section className={'add__post' + (lightMode ? " light__mode" : "")}>
            <div className='upper__part'>
                <img className='profile__image' src={require("./assets/profileSample.jpg")} alt='profile__image' />
                <input type='text' className={'whats__on__your__mind' + (lightMode ? " light__mode" : "")} onChange={(e) => setPostContent(e.target.value)} name="whats__on__your__mind" placeholder="What's on your mind..." />
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