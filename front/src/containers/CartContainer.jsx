import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import Cart from "../components/Cart"

class CartContainer extends React.Component{
    constructor(){
        super()
        
    }

    render(){
        return(
            <div>
                <Cart user = {this.props.user} cart = {this.props.cart}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducers.logged,
        cart: state.cartReducers.cart
    }
}



export default withRouter(connect(mapStateToProps, null)(CartContainer));