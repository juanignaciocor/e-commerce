import React from "react"
import { connect } from "react-redux"
import { searchAllWines, fetchOneWine, admUpdate } from "../redux/actions/wines"
import AdminSingleUpdate from "../components/adminSIngleUpdate"


class AdminSingleWines extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
            precio: "",
            descripcion: "",
            tipo: "",
            cepa: "",
            stock: "",
            bodega: "",
            provincia: "",
            alcohol: ""


        }
        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)

    }
    componentDidMount() {
        this.props.fetchOneWine(this.props.id)

    }
    handlerChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    submit() {
        this.props.admUpdate(this.state.nombre,
            this.state.precio,
            this.state.descripcion,
            this.state.tipo,
            this.state.cepa,
            this.state.stock,
            this.state.bodega,
            this.state.provincia,
            this.state.alcohol,
            this.props.id)
    }

    render() {
        const { wine } = this.props
        return (
            <div>
                <AdminSingleUpdate wine={wine}
                    handlerChange={this.handlerChange}
                    submit={this.submit}></AdminSingleUpdate>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    console.log(ownProps)
    return {
        id: ownProps.match.params.id,
        wine: state.winesReducers.singleWine


    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchOneWine: (idProducto) => dispatch(fetchOneWine(idProducto)),
        admUpdate: (nombre, precio, descripcion, tipo, cepa, stock, bodega, provincia, alcohol, idProducto) => dispatch(admUpdate(nombre, precio, descripcion,
            tipo, cepa, stock, bodega, provincia, alcohol, idProducto))


    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminSingleWines);

