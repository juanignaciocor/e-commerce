import React from "react"
import { connect } from "react-redux"
import Vinos from "../components/Vinos"
import { createCartItem } from "../redux/actions/cart"
import { singleCategory } from "../redux/actions/category"
import SubCategory from "../components/subCategory"

class subCategoryContainer extends React.Component {
    constructor() {
        super()
        this.handlerClick = this.handlerClick.bind(this)
    }

    componentDidMount() {
        this.props.singleCategory(this.props.id)
    }
    handlerClick(vinoId) {
        let obj = { idProducto: vinoId, idUsuario: this.props.user, cantidad: 1 }
        this.props.createCartItem(obj)
            (alert("Producto añadido a tu carrito"))
    }

    render() {
        const { oneCategory } = this.props
        return (
            <div>
                <SubCategory oneCategory={oneCategory} handlerClick={this.handlerClick}></SubCategory>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {

    return {
        id: ownProps.match.params.nombre,
        user: state.userReducers.logged,
        oneCategory: state.categoryReducers.oneCategory
    }
};




const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createCartItem: (item) => dispatch(createCartItem(item)),
        singleCategory: (id) => dispatch(singleCategory(id))
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(subCategoryContainer);


//<Vinos vinos={oneCategory} handlerClick={this.handlerClick} />