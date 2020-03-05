import React from "react"
import { connect } from "react-redux"
import { searchRosado } from "../redux/actions/wines"
import Vinos from "../components/Vinos"
import { createCartItem } from "../redux/actions/cart"

class CategoryRosadoContainer extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
    }

    componentDidMount() {
        this.props.searchRosado()
    }

    handlerClick(vinoId) {
        let obj = { idProducto: vinoId, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
            (alert("Producto añadido a tu carrito"))
    }

    render() {
        const { rosado } = this.props

        return (
            <div>
                <Vinos handlerClick={this.handlerClick} vinos={rosado} />

            </div>

        )
    }
}


const mapStateToProps = function (state, ownProps) {
    console.log(ownProps)
    return {
        rosado: state.winesReducers.categoryRosados,
        user: state.userReducers.logged
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchRosado: () => (dispatch(searchRosado())),
        createCartItem: (item) => dispatch(createCartItem(item))
    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryRosadoContainer);
