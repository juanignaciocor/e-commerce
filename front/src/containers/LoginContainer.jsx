import React from 'react';
import { connect } from "react-redux"
import Login from "../components/Login"
import {loguearUsuario} from "../redux/actions/user"


class LoginContainer extends React.Component{
    constructor(){
        super(),
        this.state = {
            email: "",
            password: "",
            error: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        let obj = {email: e.target[0].value, password: e.target[1].value}
        this.props.loguearUsuario(obj)
            .then(() => {this.setState({error:false})})
            .catch(() => {this.setState({error:true})})
    }

    render(){
        return(
            <div>
                <Login handleChange={this.handleChange} handleSubmit={this.handleSubmit} state= {this.state}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        loguearUsuario: (usuario) => dispatch(loguearUsuario(usuario))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);