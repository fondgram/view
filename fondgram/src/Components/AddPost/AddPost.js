import React from 'react'
import "./AddPost.css"
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

const AddPost = () => {
    return (
        <section className='add__post'>
            <div className='upper_part'>
                <img className='profile__image' src={require("./assets/emptyProfile.webp")} alt='profile__image' />
                <input type='text' className='whats__on__your__mind' name="whats__on__your__mind" placeholder="What's on your mind..." />
            </div>

            <hr />
            <button type='button' className='add__post__image'>
                <InsertPhotoIcon sx={{ fontSize: "35px", padding:"0 5px"}}/>
                Image
            </button>
        </section>
    )
}

export default AddPost