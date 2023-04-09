import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import AddPost from '../../Components/AddPost/AddPost'
import ProfileInfoCard from '../../Components/ProfileInfoCard/ProfileInfoCard'
import "./Home.css"
import { Add } from '@mui/icons-material'
const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <main>
        <ProfileInfoCard />
        <AddPost />

        <h1>Home</h1>
        <h2>asdfasdf</h2>
        <h2>asdfasdf</h2>
        <h2>asdfasdf</h2>
        <h2>asdfasdf</h2>
        <h2>asdfasdf</h2>
        <h2>asdfasdf</h2>
        <h2>asdfasdf</h2>
      </main>
    </div>
  )
}

export default Home