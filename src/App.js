import React, { useState, useEffect } from 'react';
import DnsOutlinedIcon from '@material-ui/icons/DnsOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PermContactCalendarOutlinedIcon from '@material-ui/icons/PermContactCalendarOutlined';
import WcRoundedIcon from '@material-ui/icons/WcRounded';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import PhoneIphoneOutlinedIcon from '@material-ui/icons/PhoneIphoneOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import './App.css';
const App = () =>
{
  const [user, setUser] = useState(null);
  let content = null;

  useEffect(() => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data =>{
      let record = data.results[0];
      setUser(record)
    })
  },[]) 

  let handleClick = () =>{
    window.location.reload();
  }

  if(user)
  {
    content = (
      <div className="position-absolute top-50 start-50 translate-middle border border-4 border-light p-5 shadow">
        <h1 className="text-center">User Generator</h1>
        <img src={user.picture.large} alt="userImage" className="userImg mx-auto d-block"/>
        <p><DnsOutlinedIcon /> {user.name.first + " " + user.name.last}</p>
        <p><EmailOutlinedIcon /> {user.email} </p>
        <p><PermContactCalendarOutlinedIcon /> {user.dob.age}</p>
        <p><WcRoundedIcon /> {user.gender}</p>
        <p><LocationOnOutlinedIcon /> {user.location.state + " " + user.location.country}</p>
        <p><PhoneIphoneOutlinedIcon /> {user.phone}</p>
        <p><AccountCircleOutlinedIcon /> {user.login.username}</p>
        <p><LockOutlinedIcon /> {user.login.password}</p>
        <input type="button" value="Refresh" onClick={handleClick} className="btn btn-secondary refresh"/>
      </div>
    )
  }
  return(
    <div>
        {content} 
    </div>
  )
}
export default App;