import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import { connect } from 'react-redux';
import { getUser } from '../../../Public/Redux/Actions/user';

class TableUser extends Component {
  constructor(props){
    super(props);
    this.state={
      data :'',
    }
  }
    componentDidMount = async () => {
      await this.props.dispatch (getUser());
      this.setState ({
        data: this.props.user.userList,
      });
    };

    render(){
      return (
      <div className="tableuser" >
            <div>
              <h6><b>Data User</b></h6>
            </div>
            <Table striped bordered hover>
            <thead>
                <tr style={{textAlign:"center"}}>
                {/* <th>#</th> */}
                <th>Nama Lengkap</th>
                <th>Email</th>
                </tr>
            </thead>
            <tbody>
            {typeof this.state.data === 'object'
              ? this.state.data.map (item => {
                  return(
                <tr key={item.id_product} style={{textAlign:"center"}}>
                  <td>
                    {item.username}
                  </td>
                  <td>{item.email}</td>
                </tr>
                );
              })
                : <img
                src="https://www.rhsports.com.au/images/DYO/loading-dyo.gif"
                width="100%"
                alt="gambar"
                style={{marginLeft:"150%"}}
              />
            }
            </tbody>
            </Table>
        </div>
      )
    }
};

const mapStateToProps = state =>{
  return {
    user : state.user,
  }
}

export default connect(mapStateToProps)(TableUser);