import React from "react"
import { connect } from "react-redux"
import { searchRosado } from "../redux/actions/wines"
import Vinos from "../components/Vinos"

class CategoryRosadoContainer extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.searchRosado()

    }

    render() {
        const { rosado } = this.props

        return (
            <div>
                <Vinos vinos={rosado}></Vinos>

            </div>

        )
    }
}


const mapStateToProps = function (state, ownProps) {
    console.log(ownProps)
    return {
        rosado: state.winesReducers.categoryRosados


    }
};




const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchRosado: () => (dispatch(searchRosado()))

    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryRosadoContainer);
