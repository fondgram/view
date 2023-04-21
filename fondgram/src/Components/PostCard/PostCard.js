import React, { useContext } from 'react'
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { AppContext } from '../../AppContext';

import "./PostCard.css"

const PostCard = ({props}) => {
  const { lightMode, setLightMode } = useContext(AppContext);
  const handleAddLike = () => {
    console.log("like added")
  }
  const handleShowComments = () => {
    console.log("comment added")
  }
  const handleAddFriend = () => {
    console.log('asdfsd')
  }
  return (
    <div className={'post__card '  + (lightMode ? " light__mode" : "")}>
      <div className='upper__part'>
        <img className='profile__image' src={require("./assets/profileSample.jpg")} alt='profile__image' />
        <div className='info'>
          <p className={'full__name' + (lightMode ? " light__mode" : "")}>Trim Kusari</p>
          <p className={'location' + (lightMode ? " light__mode" : "")}>Place</p>
        </div>
        <PersonAddIcon onClick={handleAddFriend} sx={{ marginTop: '10px', backgroundColor: '#33DDFB', borderRadius: '50%', padding: "5px", cursor: 'pointer' }} />
      </div>
      <div className='bottom__part'>
        <p className={'description' + (lightMode ? " light__mode" : "")}>SOme really lasdfsad description</p>
        <img className='post__image' src={props.imageUrl} alt='profile__image' />
        <div>
          <div className='likes'>
            <FavoriteBorderIcon className='icon' onClick={handleAddLike} sx={{ fontSize: "32px", padding: '4px', color: '#33DDFB', cursor: 'pointer', margin: '4px' }} /> {/*Todo: set filled heart if liked, otherwise unfilled */}
            <span>3</span>
          </div>
          <div className='comments'>
            <InsertCommentIcon className='icon' onClick={handleShowComments} sx={{ fontSize: "32px", padding: '4px', color: '#33DDFB', cursor: 'pointer', margin: '4px' }} />
            <span>3</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard