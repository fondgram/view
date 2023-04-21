import React, { useContext} from 'react'
import { AppContext } from '../../AppContext';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Variables } from '../../Variables';
import axios from 'axios';
import "./ProfileRow.css"

const ProfileRow = ({props}) => {
  const { lightMode, setLightMode } = useContext(AppContext);

  const handleAddFriend = () => {
    console.log('clicked')
  }
  return (
    <div className={'profile__row' + (lightMode ? " light__mode" : "")}>
      <img className='profile__image' src={props.profileImageUrl} alt='profile__image' />
      <div className='info'>
        <p className={'full__name' + (lightMode ? " light__mode" : "")}>Trim Kusari</p>
        <p className='nr__friends'>3 friends</p>
      </div>
      <PersonAddIcon onClick={handleAddFriend} sx={{ marginTop: '10px', backgroundColor: '#33DDFB', borderRadius: '50%', padding: "5px", cursor: 'pointer' }} />
    </div>
  )
}

export default ProfileRow