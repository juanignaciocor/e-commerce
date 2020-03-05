import React, { Component } from "react";
import { connect } from "react-redux";
import Vinos from "../components/Vinos";
import { createCartItem } from "../redux/actions/cart"

class VinosContainer extends Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this)
  }

  handlerClick(vinoId) {
    let obj = { idProducto: vinoId, idUsuario: this.props.user, cantidad: 1 }
    this.props.createCartItem(obj)
      (alert("Producto añadido a tu carrito"))

  }
  render() {
    return (
      <Vinos vinos={this.props.vinos} handlerClick={this.handlerClick} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    vinos: state.winesReducers.vinosBusqueda,
    user: state.userReducers.logged
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createCartItem: (item) => dispatch(createCartItem(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(VinosContainer);
