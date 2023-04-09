import React from 'react'
import Diversity3Icon from '@mui/icons-material/Diversity3';
import RoomIcon from '@mui/icons-material/Room';
import CakeIcon from '@mui/icons-material/Cake';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EditIcon from '@mui/icons-material/Edit';
import "./ProfileInfoCard.css"

const ProfileInfoCard = () => {
  const handleEditSocialProfile = () =>{
    console.log("asdfsd")
  }
  return (
    <div className='profile__info__card'>
      <div className='upper__part'>
        <img className='profile__image' src={require("./assets/profileSample.jpg")} alt='profile__image' />
        <div className='info'>
          <p className='full__name'>Jeton Sllamniku</p>
          <p className='nr__friends'>3 friends</p>
        </div>
        <Diversity3Icon sx={{ marginTop: '20px' }} />
      </div>
      <hr />
      <div className='location__part'>
        <div className='location__info'>
          <RoomIcon />
          <p className='location'>Henc, Fushe Kosove</p>
        </div>
        <div className='location__info'>
          <CakeIcon />
          <p className='age'>25 years old</p>
        </div>
      </div>
      <hr />
      <div className='views__part'>
        <div className='views'>
          <p>Who's viewed your profile</p>
          <p className='nr__views'>7324</p>
        </div>
        <div className='views'>
          <p>Impressions of your post</p>
          <p className='nr__impressions'>1312</p>
        </div>
      </div>
      <hr />
      <div className='profiles__part'>
        <h4>Social Profiles</h4>
        <div className='profiles'>
          <div className='twitter'>
            <TwitterIcon sx={{ fontSize: '30px', marginTop: '7px' }} />
            <div>
              <p>Twitter</p>
              <p className='explain'>Social Network</p>
            </div>
            <EditIcon sx={{ marginTop: '7px', cursor:'pointer'}} onClick={handleEditSocialProfile}/>
          </div>
          <div className='facebook'>
            <FacebookIcon sx={{ fontSize: '30px', marginTop: '7px' }} />
            <div>
              <p>Facebook</p>
              <p className='explain'>Social Network</p>
            </div>
            <EditIcon sx={{ marginTop: '7px' }} />
          </div>
          <div className='instagram'>
            <InstagramIcon sx={{ fontSize: '30px', marginTop: '7px' }} />
            <div>
              <p>Instagram</p>
              <p className='explain'>Social Network</p>
            </div>
            <EditIcon sx={{ marginTop: '7px' }} />

          </div>
          <div className='linkedin'>
            <LinkedInIcon sx={{ fontSize: '30px', marginTop: '7px' }} />
            <div>
              <p>LinkedIn</p>
              <p className='explain'>Network Platforms</p>
            </div>
            <EditIcon sx={{ marginTop: '7px' }} />

          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfoCard