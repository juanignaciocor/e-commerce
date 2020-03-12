import React, { Component, Fragment } from "react";
import axios from "axios"
import { connect } from "react-redux"
import Review from "../components/Review"
import { fetchReviews } from "../redux/actions/review"

class ReviewContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log("WINEIDDDDDDDDDDDDDDD", this.props.wineId)
        return (
            this.props.fetchReviews(this.props.wineId)
        )

    }

    render() {
        return (

            <Review reviews={this.props.reviews} />

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        reviews: state.reviewsReducers.review,
        vinoSeleccionado: state.winesReducers.vinoSeleccionado
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchReviews: (review) => dispatch(fetchReviews(review))
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(ReviewContainer)
