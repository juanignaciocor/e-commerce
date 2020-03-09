import React, { Component, Fragment } from "react";
import SingleWine from "../components/SingleWine"
import axios from "axios"
import { connect } from "react-redux"
import Pagination from "../components/Pagination"

class PaginationContainer extends Component {
    constructor(props) {
        super(props)
        console.log(this.handlerClick1)
        this.handlerClick1 = this.handlerClick1.bind(this)
    }
    
    handlerClick1(e) {
        e.preventDefault();
        console.log("HOLAAAAAA")
    }

    render() {
        return (
            <Pagination handlerClick1 = {this.handlerClick1}/>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducers.logged
    }
}



const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createCartItem: (item) => dispatch(createCartItem(item))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(PaginationContainer)