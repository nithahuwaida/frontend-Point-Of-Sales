import React, {Component} from 'react';
import {withRouter, Redirect} from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';

class Logout extends Component {
    constructor(props){
        super(props);
        this.state={
            redirect:false
        }
        // this.logout= this.logout.bind(this);
    }

    componentWillMount(){
        if(localStorage.getItem('cool-jwt')){
            console.log('Call');
        }else{
            this.setState({redirect:true});
        }
    }
    logout(props){
        localStorage.removeItem('cool-jwt');
        // console.log(this.state.redirect)
        // this.setState({redirect:true});
        props.history.push('/login')
        // console.log('logout p',props);
    }

    render(){
        
        
        if(this.state.redirect){
            return (<Redirect to={'/login'}/>)
        }
        return (
            <div>
                <ListItem button onClick={()=> this.logout(this.props)}>
                    <ListItemIcon><Icon>exit_to_app</Icon></ListItemIcon>
                    <ListItemText primary ="Logout"/>
                </ListItem>
            </div>
        )
    }
}

export default withRouter(Logout);