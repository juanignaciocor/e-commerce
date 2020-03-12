import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import UserAdmin from "../components/UserAdmin"
import { FetchAllUsers, ChangeToAdmin, ChangeToUser, allOrderAdmin, changeToEnviado, allProducts } from "../redux/actions/users"
import { searchAllWines, createCategory } from "../redux/actions/wines"
import UsersChange from "../components/UsersChange"
import AllOrder from "../components/allOrder"
import AdminCategory from "../components/adminCategory"

class UserAdminContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vistaModificar: false,
            vistaOrdenes: false,
            vistaCategorias: false,
            vistaProductos: false,
            nombreCategoria: ""
        }
        this.ToogleUsers = this.ToogleUsers.bind(this)
        this.ToogleOrdenes = this.ToogleOrdenes.bind(this)
        this.ToogleCategorias = this.ToogleCategorias.bind(this)
        this.ToogleProductos = this.ToogleProductos.bind(this)
        this.changeAdmin = this.changeAdmin.bind(this)
        this.changeUser = this.changeUser.bind(this)
        this.changeInput = this.changeInput.bind(this)
        this.viewProducts = this.viewProducts.bind(this)
        this.newCategory = this.newCategory.bind(this)
        this.handleCategory = this.handleCategory.bind(this)





    }
    componentDidMount() {
        this.props.FetchAllUsers()
            .then((data) => this.props.allOrderAdmin()
            )
            .then(data => this.props.allProducts(2))
    }

    ToogleUsers() { this.setState({ vistaModificar: !this.state.vistaModificar }) };
    ToogleOrdenes() { this.setState({ vistaOrdenes: !this.state.vistaOrdenes }) }
    ToogleCategorias() { this.setState({ vistaCategorias: !this.state.vistaCategorias }) }
    ToogleProductos() { this.setState({ vistaProductos: !this.state.vistaProductos }) }
    changeAdmin(idUser) { this.props.ChangeToAdmin(idUser) }
    changeUser(idUser) { this.props.ChangeToUser(idUser) }
    changeInput(idOrder, valor) { this.props.changeToEnviado(idOrder, valor) }
    viewProducts(idOrder) { return (this.props.allProducts(idOrder)) }
    newCategory(e) {
        e.preventDefault()
        this.props.createCategory(this.state.nombreCategoria)
    }
    handleCategory(e) { this.setState({ nombreCategoria: e.target.value }) }
    render() {
        const { allUsers, allOrder, producto, user } = this.props
        return (
            <div>
                <UserAdmin
                    ToogleUsers={this.ToogleUsers}
                    ToogleOrdenes={this.ToogleOrdenes}
                    ToogleCategorias={this.ToogleCategorias}
                    ToogleProductos={this.ToogleProductos}
                />
                {this.state.vistaModificar ? (<UsersChange
                    usuario={user}
                    allUsers={allUsers}
                    changeAdmin={this.changeAdmin}
                    changeUser={this.changeUser} />)
                    : (<React.Fragment></React.Fragment>)}

                {this.state.vistaOrdenes ? (<AllOrder
                    allOrder={allOrder}
                    changeInput={this.changeInput}
                    viewProducts={this.viewProducts}
                    producto={producto}
                    ToogleProductos={this.ToogleProductos}
                    vistaProductos={this.state.vistaProductos} />)
                    : (<React.Fragment></React.Fragment>)}

                {this.state.vistaCategorias ? (<AdminCategory newCategory={this.newCategory}
                    handleCategory={this.handleCategory}
                    nombreCategoria={this.state.nombreCategoria} />)
                    : (<React.Fragment></React.Fragment>)}



            </div>)
    }
}
const mapStateToProps = function (state, ownProps) {
    return {
        allUsers: state.userReducers.allUsers,
        user: state.userReducers.logged,
        allOrder: state.userReducers.allOrder,
        producto: state.userReducers.allProducts
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        FetchAllUsers: () => dispatch(FetchAllUsers()),
        ChangeToAdmin: (idUser) => dispatch(ChangeToAdmin(idUser)),
        ChangeToUser: (idUser) => dispatch(ChangeToUser(idUser)),
        allOrderAdmin: () => dispatch(allOrderAdmin()),
        changeToEnviado: (idOrder, valor) => dispatch(changeToEnviado(idOrder, valor)),
        allProducts: (order) => dispatch(allProducts(order)),
        searchAllWines: () => (dispatch(searchAllWines())),
        createCategory: (nombre) => (dispatch(createCategory(nombre))),



    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAdminContainer);
