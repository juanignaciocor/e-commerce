import React, { useState, useEffect } from "react"
import { connect } from "react-redux"
import UserAdmin from "../components/UserAdmin"
import { FetchAllUsers, ChangeToAdmin, ChangeToUser, allOrderAdmin } from "../redux/actions/users"
import UsersChange from "../components/UsersChange"
import AllOrder from "../components/allOrder"


class UserAdminContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vistaModificar: false,
            vistaOrdenes: false,
            vistaCategorias: false,
            vistaProductos: false

        }
        this.ToogleUsers = this.ToogleUsers.bind(this)
        this.ToogleOrdenes = this.ToogleOrdenes.bind(this)
        this.ToogleCategorias = this.ToogleCategorias.bind(this)
        this.ToogleProductos = this.ToogleProductos.bind(this)
        this.changeAdmin = this.changeAdmin.bind(this)
        this.changeUser = this.changeUser.bind(this)
    }
    componentDidMount() {
        this.props.FetchAllUsers()
            .then((data) => this.props.allOrderAdmin()
            )
    }

    ToogleUsers() { this.setState({ vistaModificar: !this.state.vistaModificar }) };
    ToogleOrdenes() { this.setState({ vistaOrdenes: !this.state.vistaOrdenes }) }
    ToogleCategorias() { this.setState({ vistaCategorias: !this.state.vistaCategorias }) }
    ToogleProductos() { this.setState({ vistaProductos: !this.state.vistaProductos }) }
    changeAdmin(idUser) { this.props.ChangeToAdmin(idUser) }
    changeUser(idUser) { this.props.ChangeToUser(idUser) }
    render() {
        const { allUsers, allOrder } = this.props
        return (
            <div>
                <UserAdmin
                    ToogleUsers={this.ToogleUsers}
                    ToogleOrdenes={this.ToogleOrdenes}
                    ToogleCategorias={this.ToogleCategorias}
                    ToogleProductos={this.ToogleProductos}
                />
                {this.state.vistaModificar ? (<UsersChange allUsers={allUsers}
                    changeAdmin={this.changeAdmin}
                    changeUser={this.changeUser} />)
                    : (<React.Fragment></React.Fragment>)}

                {this.state.vistaOrdenes ? (<AllOrder allOrder={allOrder} />)
                    : (<React.Fragment></React.Fragment>)}

            </div>)
    }
}
const mapStateToProps = function (state, ownProps) {
    return {
        allUsers: state.userReducers.allUsers,
        user: state.userReducers.logged,
        allOrder: state.userReducers.allOrder,
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        FetchAllUsers: () => dispatch(FetchAllUsers()),
        ChangeToAdmin: (idUser) => dispatch(ChangeToAdmin(idUser)),
        ChangeToUser: (idUser) => dispatch(ChangeToUser(idUser)),
        allOrderAdmin: () => dispatch(allOrderAdmin())

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserAdminContainer);
