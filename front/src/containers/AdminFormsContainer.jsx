import React from "react"
import { connect } from "react-redux"
import AdminCreate from "../components/adminCreate"
import { admCreate } from "../redux/actions/wines"
import { fetchAllCategory } from "../redux/actions/category"

class AdminFormsContainer extends React.Component {
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
            alcohol: "",
            imagen: "",
            categorias: {

            }


        }
        this.handlerChange = this.handlerChange.bind(this)
        this.submit = this.submit.bind(this)
        this.handleCheckbox = this.handleCheckbox.bind(this)


    }
    componentDidMount() {
        this.props.fetchAllCategory()

    }
    handlerChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    handleCheckbox(e) {
        this.setState({ categorias: { ...this.state.categorias, [e.target.value]: e.target.id } })
    }
    submit(e) {
        e.preventDefault()
        this.props.admCreate(this.state.nombre,
            this.state.precio,
            this.state.descripcion,
            this.state.tipo,
            this.state.cepa,
            this.state.stock,
            this.state.bodega,
            this.state.provincia,
            this.state.alcohol,
            this.state.imagen,
            this.state.categorias)
    }

    render() {
        const { allCategory } = this.props
        return (
            <div>
                <AdminCreate
                    handlerChange={this.handlerChange}
                    submit={this.submit}
                    allCategory={allCategory}
                    handleCheckbox={this.handleCheckbox}
                ></AdminCreate>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        allCategory: state.categoryReducers.allCategory
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        admCreate: (nombre, precio, descripcion, tipo, cepa, stock, bodega, provincia, alcohol, imagen, categoria) => dispatch(admCreate(nombre, precio, descripcion,
            tipo, cepa, stock, bodega, provincia, alcohol, imagen, categoria)),
        fetchAllCategory: () => dispatch(fetchAllCategory())

    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminFormsContainer);

