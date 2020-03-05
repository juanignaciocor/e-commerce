import React from "react"
import { connect } from "react-redux"
import { searchBlanco } from "../redux/actions/wines"
import Vinos from "../components/Vinos"
import { createCartItem } from "../redux/actions/cart"

class CategoryBlancoContainer extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
    }

    componentDidMount() {
        this.props.searchBlanco()
    }
    handlerClick(vinoId) {
        let obj = { idProducto: vinoId, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
            (alert("Producto añadido a tu carrito"))
    }

    render() {
        const { blanco } = this.props
        return (
            <div>
                <Vinos vinos={blanco} handlerClick={this.handlerClick} />
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        blanco: state.winesReducers.categoryBlancos,
        user: state.userReducers.logged
    }
};




const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchBlanco: () => (dispatch(searchBlanco())),
        createCartItem: (item) => dispatch(createCartItem(item))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryBlancoContainer);
