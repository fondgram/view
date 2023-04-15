import React, { useContext } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddPost from '../../Components/AddPost/AddPost'
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard'
import PostCard from '../../Components/PostCard/PostCard'
import Recommended from '../../Components/Recommended/Recommended'
import { AppContext } from '../../AppContext'
import FriendsList from '../../Components/FriendsList/FriendsList'
import "./Home.css"


const Home = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  return (
    <div className={'home' + (lightMode ? " light__mode" : "")}>
      <Navbar />
      <main>
        <div>
          <ProfileInfoCard />
          <FriendsList />
        </div>
        <div>
          <AddPost />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
        <Recommended />
      </main>
    </div>
  )
}

export default Home