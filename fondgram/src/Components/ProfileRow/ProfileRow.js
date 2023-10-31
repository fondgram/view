import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../../AppContext';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Variables } from '../../Variables';
import axios from 'axios';
import "./ProfileRow.css"
import { showErrorToast, showSuccessToast } from '../../NotificationUtils';

const ProfileRow = ({ props }) => {
  const { lightMode, setLightMode } = useContext(AppContext);
  const [profileImageUrl, setProfileImageUrl] = useState("");
  useEffect(() => {
    if (!props.user.profileImageUrl || props.user.profileImageUrl === "string" || props.user.profileImageUrl === "") {
      setProfileImageUrl("https://i.imgur.com/HlZFImH.png");
    } else {
      setProfileImageUrl(props.user.profileImageUrl);
    }
  }, [props.user.profileImageUrl]);

  const handleAddFriend = async (userId) => {
    try {
      const response = await axios.post(Variables.API_URL + `user/FollowUser?userToFollowId=${userId}`, null, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
        },
      });

      if (response.status === 200) {
        const token = response.data.token;
        showSuccessToast("Started following!")
      }
    } catch (error) {
      var response = error.response.data;
      response.errors.forEach(error => {
        showErrorToast(error)
      });
    }
  }

  return (
    <div className={'profile__row' + (lightMode ? " light__mode" : "")}>
      <img className='profile__image' src={profileImageUrl} alt='profile__image' />
      <div className='info'>
        <p className={'full__name' + (lightMode ? " light__mode" : "")}>{props.user.firstName + " " + props.user.lastName}</p>
        <p className='nr__friends'>{props.followersCount} followers</p>
      </div>
      {!props.following ? 
      (
        <PersonAddIcon onClick={() => handleAddFriend(props.user.id)} sx={{ marginTop: '10px', backgroundColor: '#00b5cA', borderRadius: '50%', padding: "5px", cursor: 'pointer' }} />
      ) : (<p>Following</p>)}
    </div>
  )
}

export default ProfileRow