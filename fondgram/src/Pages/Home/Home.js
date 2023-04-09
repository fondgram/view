import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddPost from '../../Components/AddPost/AddPost'
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard'
import PostCard from '../../Components/PostCard/PostCard'
import Recommended from '../../Components/Recommended/Recommended'
import "./Home.css"
import { Add } from '@mui/icons-material'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <main>
        <ProfileInfoCard />
        <div>
          <AddPost />
          <PostCard/>
          <PostCard/>
          <PostCard/>
        </div>
        <Recommended/>
      </main>
    </div>
  )
}

export default Home