import React from "react"
import { connect } from "react-redux"
import AdminCreate from "../components/adminCreate"
import { searchAllWines, admDestroy } from "../redux/actions/wines"
import AdminAllwines from "../components/adminAllWines"


class AdmAllwines extends React.Component {
    constructor(props) {
        super(props);
        this.destroyProduct = this.destroyProduct.bind(this)

    }
    componentDidMount() {

        this.props.searchAllWines()

    }
    destroyProduct(id) {
        this.props.admDestroy(id)
    }
    render() {
        const { allWines } = this.props
        return (
            <div>
                <AdminAllwines allWines={allWines}
                    destroyProduct={this.destroyProduct}></AdminAllwines>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        allWines: state.winesReducers.vinosTodos

    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchAllWines: () => (dispatch(searchAllWines())),
        admDestroy: (idProducto) => (dispatch(admDestroy(idProducto))),
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdmAllwines);

