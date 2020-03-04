import React from 'react';
import { connect } from "react-redux"
import Register from "../components/Register"
import {crearUsuario} from "../redux/actions/users"


class RegisterContainer extends React.Component{
    constructor(){
        super(),
        this.state = {
            nombre: "",
            apellido: "",
            email: "",
            fechaNacimiento: "",
            domicilio: "",
            username: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
   
    handleChange (e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleSubmit (e) {
        e.preventDefault();
        let obj = {nombre: e.target[0].value, apellido: e.target[1].value, fechaNacimiento: e.target[2].value, email: e.target[3].value, domicilio: e.target[4].value, username: e.target[5].value, password: e.target[6].value}
        this.props.crearUsuario(obj)
    }

    render(){
        return(
            <div>
                <Register handleChange={this.handleChange} handleSubmit={this.handleSubmit} state= {this.state}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    
})

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        crearUsuario: (usuario) => dispatch(crearUsuario(usuario))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);