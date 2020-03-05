import React from "react"
import { connect } from "react-redux"
import { searchTinto } from "../redux/actions/wines"
import Vinos from "../components/Vinos"
import { createCartItem } from "../redux/actions/cart"

class CategoryTintoContainer extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
    }

    componentDidMount() {
        this.props.searchTinto()
    }

    handlerClick(vinoId) {
        let obj = { idProducto: vinoId, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
            (alert("Producto añadido a tu carrito"))
    }

    render() {
        const { tinto } = this.props
        return (
            <div>
                <Vinos handlerClick={this.handlerClick} vinos={tinto} />
            </div>
        )
    }
}


const mapStateToProps = function (state, ownProps) {
    return {
        tinto: state.winesReducers.categoryTintos,
        user: state.userReducers.logged
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchTinto: () => (dispatch(searchTinto())),
        createCartItem: (item) => dispatch(createCartItem(item))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryTintoContainer);

