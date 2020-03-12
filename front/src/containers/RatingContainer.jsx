import React, { Component, Fragment } from "react";
import Rating from "../components/Rating"
import { connect } from "react-redux"

class RatingContainer extends Component {
    constructor(props) {
        super(props)
        this.handlerClick1 = this.handlerClick1.bind(this)
    }
    
    handlerClick1(e) {
        e.preventDefault();
    }

    render() {
        return (
            <Rating handlerClick1 = {this.handlerClick1}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(RatingContainer)
