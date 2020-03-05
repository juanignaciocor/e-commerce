import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import Cart from "../components/Cart"
import { searchUserCart, userRemoveCart } from "../redux/actions/cart"


class CartContainer extends React.Component {
    constructor() {
        super()
        this.removeClick = this.removeClick.bind(this)
    }
    componentDidMount() {

        this.props.searchUserCart(this.props.userId)

    }
    removeClick(productoId) {

        this.props.userRemoveCart(this.props.userId, productoId)

    }

    render() {
        const { searchCart } = this.props

        return (
            <div>
                <Cart user={this.props.user} cart={this.props.cart} searchCart={searchCart} removeClick={this.removeClick} />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        user: state.userReducers.logged,
        cart: state.cartReducers.cart,
        userId: state.userReducers.logged.id,
        searchCart: state.cartReducers.searchCart

    }
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchUserCart: (userId) => (dispatch(searchUserCart(userId))),
        userRemoveCart: (userId, productoId) => (dispatch(userRemoveCart(userId, productoId)))

    }

}



export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartContainer));