import React, { useContext } from 'react'
import { AppContext } from '../../AppContext';
import ProfileRow from '../ProfileRow/ProfileRow';
import "./FriendsList.css"
const FriendsList = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  return (
    <div className={'friends__list hide__xs ' + (lightMode ? " light__mode" : "")}>
      <p className='title'>Friend List</p>
      <ProfileRow/>
      <ProfileRow/>
      <ProfileRow/>
      <ProfileRow/>
      <ProfileRow/>
    </div>
  )
}

export default FriendsList