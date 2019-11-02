import React, {Component} from 'react';
import { Tab, Nav, Row, Col } from 'react-bootstrap';
import Divider from '@material-ui/core/Divider';
import AccountUser from './AccountUsers';
import TableUser from './TableUser';

class Setting extends Component{
  render(){
    return (
      <div className="Setting" >
        <h3 style={{marginBottom:"2px", fontFamily:"Airbnb Cereal App Bold"}}>
           Account and Setting
        </h3>
        <Divider/>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row style={{marginTop: "25px"}}>
            <Col sm={3} 
            style={{maxWidth:"15%",
            // borderRight:" 3px solid #4e545a",
            marginTop: "3%"}}>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link 
                    style={{marginTop: "20px",
                    marginBottom:"20px", 
                    // active={color: "#060606",
                    // backgroundColor: "#e8b3b3",
                    borderLeft: "5px solid #4e545a",
                    borderRight: "5px solid #4e545a",}} 
                    eventKey="first">
                    Data User
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    style={{marginBottom: "20px",
                    // backgroundColor: "#e8b3b3",
                    borderLeft: "5px solid #4e545a",
                    borderRight: "5px solid #4e545a",
                  }}
                    eventKey="second">
                    Account User
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9} style={{maxWidth: "85%", marginLeft:"3%"}}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <TableUser/>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <AccountUser/>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}

export default Setting;