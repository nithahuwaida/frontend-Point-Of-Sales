import React, {Component} from 'react';
import logoImg from './logo.png';
import './LoginRegister.css';
import {Link} from '@material-ui/core';
import { Input, InputGroup} from 'reactstrap';
import { connect } from 'react-redux';
import { postRegister } from '../../Public/Redux/Actions/register';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      username : "",
      email: "",
      password : "",
    };
  }
  handlerChange=(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }

  submit = async(e) => {
    e.preventDefault();
      await this.props.dispatch(postRegister(this.state))
      .then(res =>{
        this.props.history.push('/login')
      }).catch (error => console.log (error));
  }

  render () {
    return (
      <div className="base-container" style={{backgroundColor: "#CD5C5C"}}>
        <div className="header">
          <img src={logoImg} alt="Logo"/>
        </div>
        <div className="content">
          <b>R E G I S T E R </b>
          <p>Enter your account details below:</p>
        </div>
        <form onSubmit={e => this.submit(e)}>
          <div className="form">
            <InputGroup className="mb-4">
              <Input type="username" name="username" placeholder="Username" onChange={this.handlerChange} />
            </InputGroup>
            <InputGroup className="mb-4">  
              <Input type="email" name="email" placeholder="Email" onChange={this.handlerChange} />
            </InputGroup>
            <InputGroup className="mb-4">
              <Input type="password" name="password" placeholder="Password" onChange={this.handlerChange} />
            </InputGroup>
          </div>
          <div className="footer">
            <button className="btn-1" type="submit">
                Register
            </button>
          </div>
        </form>
        <Link href='login' style={{marginTop:"30px", color:"white"}}>
            Have an account? Login
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    register : state.register,
  }
}

export default connect(mapStateToProps)(Register);