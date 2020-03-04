import React from "react"
import { connect } from "react-redux"
import { searchAllWines } from "../redux/actions/wines"
import Vinos from "../components/Vinos"

class allWines extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {

        this.props.searchAllWines()
    }

    render() {
        const { allWines } = this.props
        return (
            <div>
                <Vinos vinos={allWines} ></Vinos>
            </div>

        )
    }
}

//vinos

const mapStateToProps = function (state, ownProps) {
    return {

        allWines: state.winesReducers.vinosTodos

    }
};




const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchAllWines: () => (dispatch(searchAllWines()))

    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(allWines);