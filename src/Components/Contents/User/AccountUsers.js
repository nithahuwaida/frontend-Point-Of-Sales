import React, { Component } from 'react';
import ImgBuild from './builduser.png';

class AccountUser extends Component {
  render(){
    return(
      <div className="accountuser">
        <img src={ImgBuild} alt="Logoempty" style={{width:"15%", marginTop:"5%",marginLeft:"40%"}}/>
        <p style={{textAlign : "center" }}> <b>User account settings cannot be used yet</b></p>
      </div>
    )
  }
}

export default AccountUser;