import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import ImgDev from './image/development.png';
import Divider from '@material-ui/core/Divider';


class Report extends Component{
  render(){
    return (
      <div className="Report">
        <h3 style={{marginBottom:"2px", fontFamily:"Airbnb Cereal App Bold"}}>
          Sales Report
        </h3>
        <Divider/>
        <Typography paragraph>
          <img src={ImgDev} alt="Logoempty" style={{width:"45%", marginTop:"8%",marginLeft:"27%"}}/>
          <p style={{textAlign : "center" }}> <b>Sales Report do not yet exist </b></p>
        </Typography>  
      </div>
    )
  }
}

export default Report;