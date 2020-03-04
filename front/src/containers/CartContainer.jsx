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
                <Cart user = {this.props.user}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducers.logged
    }
}



export default withRouter(connect(mapStateToProps, null)(CartContainer));