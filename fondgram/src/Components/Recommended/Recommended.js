import React, { useContext } from 'react'
import { AppContext } from '../../AppContext';
import "./Recommended.css"

const Recommended = () => {
  const { lightMode, setLightMode } = useContext(AppContext);
  const handleCreateAdd = () => {
    console.log("created add")
  }
  return (
    <aside className={'recommended' + (lightMode ? " light__mode" : "")}>
      <div className='upper__part'>
        <p className={'sponsored' + (lightMode ? " light__mode" : "")}>Sponsored</p>
        <button className={'create__ad' + (lightMode ? " light__mode" : "")} type='button' onClick={handleCreateAdd} name='createAd'>Create Ad</button> {/* TODO: Show this button only to admins */}
      </div>
      <div className='ad__image__container'>
        <img className='ad__image' src={require("./assets/profileSample.jpg")} alt='profile__image' />
      </div>
      <div className='bottom__part'>
        <div className='info'>
          <p className={'ad__name' + (lightMode ? " light__mode" : "")}>Mika Cosmetics</p>
          <p className='website'>mikacosmetics.com</p> {/* TODO: Make this a link */}
        </div>
        <p className='description'>Your pathway to do the best oadsfds sad fsadfsadfsadsa fds</p>
      </div>
    </aside>
  )
}

export default Recommended