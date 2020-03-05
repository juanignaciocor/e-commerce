import React from "react"
import { connect } from "react-redux"
import { searchBlanco } from "../redux/actions/wines"
import Vinos from "../components/Vinos"

class CategoryBlancoContainer extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.searchBlanco()
    }

    render() {
        const { blanco } = this.props

        return (
            <div>
                <Vinos vinos={blanco}></Vinos>

            </div>

        )
    }
}


const mapStateToProps = function (state, ownProps) {
    return {
        blanco: state.winesReducers.categoryBlancos


    }
};




const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchBlanco: () => (dispatch(searchBlanco()))


    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryBlancoContainer);
