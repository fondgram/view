import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext';
import ProfileRow from '../ProfileRow/ProfileRow';
import axios from 'axios';
import { Variables } from '../../Variables';
import "./FriendsList.css"
import { showErrorToast } from '../../NotificationUtils';
const FriendsList = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  const [data, setData] = useState([])

  useEffect(() => {
    if (!localStorage.getItem("jwtToken")){
      return;
    }
    const getPosts = async () => {
      try {
        const response = await axios.get(Variables.API_URL + 'user/RecommendedFriends?page=1&pageSize=10', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("jwtToken")}`,
          },
        });
        if (response.status === 200) {
          setData(response.data);
        } else {
          showErrorToast("Couldn't get friends list!")
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [])



  return (
    <div className={'friends__list hide__xs ' + (lightMode ? " light__mode" : "")}>
      <p className='title'>Friend List</p>
      {data.map(d => <ProfileRow key={d.user.id} props={d} />)}
    </div>
  )
}

export default FriendsList