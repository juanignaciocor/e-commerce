import React from "react"
import { connect } from "react-redux"
import { searchAllWines } from "../redux/actions/wines"
import Vinos from "../components/Vinos"
import { createCartItem } from "../redux/actions/cart"

class allWines extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
    }
    
    componentDidMount() {
        this.props.searchAllWines()
    }
    handlerClick(vinoId) {
        let obj = { idProducto: vinoId, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
            (alert("Producto añadido a tu carrito"))
    }

    render() {
        const { allWines } = this.props
        const numeroPagination = this.props.match.path[10]
        return (
            <div>
                <Vinos handlerClick={this.handlerClick} vinos={allWines} numeroPagination={numeroPagination}/>
            </div>
        )
    }
}

//vinos

const mapStateToProps = function (state, ownProps) {
    return {
        allWines: state.winesReducers.vinosTodos,
        user: state.userReducers.logged
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchAllWines: () => (dispatch(searchAllWines())),
        createCartItem: (item) => dispatch(createCartItem(item))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(allWines);