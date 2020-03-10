import React, { Component, Fragment } from "react";
import SingleWine from "../components/SingleWine"
import axios from "axios"
import { connect } from "react-redux"
import { createCartItem } from "../redux/actions/cart"

class SingleWineContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vinoSeleccionado: {}
        }
        this.handlerClick = this.handlerClick.bind(this)
    }
    componentDidMount() {
        return (
            axios.get(`/api/wines/${this.props.match.params.id}`)
                .then(res => res.data)
                .then(vino => {
                    this.setState({ vinoSeleccionado: vino[0] })
                }),
            axios.get(`/api/wines/reviews/${this.props.match.params.id}/${this.props.user.id}`)
                .then(res => res.data)
                .then(res => {
                    console.log("esto va a funcionaaaaaaaaaaaaar ", res);

                })
        )
    }
    handlerClick(e) {
        let obj = { idProducto: this.state.vinoSeleccionado.id, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
    }

    render() {
        return (
            <Fragment>
                <SingleWine user={this.props.user} vinoSeleccionado={this.state.vinoSeleccionado} handlerClick={this.handlerClick} />
            </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(SingleWineContainer)