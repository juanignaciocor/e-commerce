import React, { Component, Fragment } from "react";
import axios from "axios"
import { connect } from "react-redux"
import Review from "../components/Review"

class ReviewContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: []
        }
    }
    componentDidMount() {
        return (
            axios.get(`/api/wines/reviews/${this.props.vinoSeleccionado.id}`)
                .then(res => res.data)
                .then(reviews => {
                    this.setState({ reviews: reviews })
                })
        )

    }




    render() {
        return (

            <Review reviews={this.state.reviews} />

        )
    }
}





export default connect(null, null)(ReviewContainer)
