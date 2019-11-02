import React, { Component } from 'react';
import {getJwt} from '../Helpers/jwt';
import {withRouter, Redirect} from 'react-router-dom';
import axios from 'axios';

class AutenticationCommponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        const jwt = getJwt();
        if(!jwt){
            this.props.history.push("/login");
        }

        axios.get("/home", {headers: {"x-access-token": jwt}})
        .then(res => {
            console.log(res);
             this.setState({
            data: res.data.result.user
        }).catch(err=>{
            localStorage.removeItem('cool-jwt');
            this.props.history.push('/login');
        });
    });
    }

    render(){
        if(this.state.data === undefined){
            return (<Redirect to={'/login'}/>)
        }
        return( 
            <div>
                {this.props.children}
            </div>
        )
    }
}
export default withRouter(AutenticationCommponent);