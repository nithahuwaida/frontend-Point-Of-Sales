import React, {Component} from 'react';
import logoImg from './logo.png';
import './LoginRegister.css';
import {Link} from '@material-ui/core';
import { Input, InputGroup} from 'reactstrap';
import { connect } from 'react-redux';
import { postLogin } from '../../Public/Redux/Actions/login';

class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      username : "",
      password : '',
    };
    this.change = this.change.bind(this);
    this.submit = this.submit.bind(this);
  }

  change(e){
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  submit = async(e) => {
    e.preventDefault();
      await this.props.dispatch(postLogin(this.state))
      .then(res =>{
        localStorage.setItem('cool-jwt', 
        this.props.login.dataLogin[0].token);
        this.props.history.push('/home')
      });
  }

  render(){

    return (
      <div className="Login">
        <div className="base-container" style={{backgroundColor: "#CD5C5C"}}>
            <div className="header">
              <img src={logoImg} alt="Logo"/>
            </div>
            <div className="content">
              <b>W E L C O M E</b>
              <p>Point Of sale MaemSek</p>
            </div>
            <form onSubmit={e => this.submit(e)}>
            <div className="form">
              <InputGroup className="mb-4">
                  <Input type="username" name="username" placeholder="Username" autoComplete="current-username" onChange={e=>this.change(e)} value={this.state.username}/>
                </InputGroup>
                <InputGroup className="mb-4">
                  <Input type="password" name="password" placeholder="Password" autoComplete="current-password" onChange={e=>this.change(e)} value={this.state.password} />
                </InputGroup>
              </div>
              <div className="footer">
                <button className="btn-1" type="submit">
                  Login
                </button>
              </div>
            </form>
            <Link href='register' style={{marginTop:"30px", color:"white"}}>
              Don't have an account? Register
            </Link>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  return {
    login : state.login,
  }
}
export default connect(mapStateToProps)(Login);