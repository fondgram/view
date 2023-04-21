import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddPost from '../../Components/AddPost/AddPost'
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard'
import PostCard from '../../Components/PostCard/PostCard'
import Recommended from '../../Components/Recommended/Recommended'
import { AppContext } from '../../AppContext'
import FriendsList from '../../Components/FriendsList/FriendsList'
import { Variables } from '../../Variables'
import axios from 'axios'
import "./Home.css"


const Home = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  const [data, setData] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(Variables.API_URL + 'Post/Posts');
        setData(response.data); 
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, [])


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
          {data.map(d => <PostCard props={d} id={d.} />)}
          {/* <PostCard />
          <PostCard />
          <PostCard /> */}
        </div>
        <Recommended />
      </main>
    </div>
  )
}

export default Home