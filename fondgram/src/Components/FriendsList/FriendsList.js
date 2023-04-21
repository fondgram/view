import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../AppContext';
import ProfileRow from '../ProfileRow/ProfileRow';
import axios from 'axios';
import { Variables } from '../../Variables';
import "./FriendsList.css"
const FriendsList = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  const [data, setData] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(Variables.API_URL + 'User/Users');

        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [])
  return (
    <div className={'friends__list hide__xs ' + (lightMode ? " light__mode" : "")}>
      <p className='title'>Friend List</p>
      {data.map(d => <ProfileRow props={d} id={d.id}/>)}
      {/* <ProfileRow />
      <ProfileRow />
      <ProfileRow />
      <ProfileRow />
      <ProfileRow /> */}
    </div>
  )
}

export default FriendsList