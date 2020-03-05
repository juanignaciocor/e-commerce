import React from "react"
import { connect } from "react-redux"
import { searchTinto } from "../redux/actions/wines"
import Vinos from "../components/Vinos"

class CategoryTintoContainer extends React.Component {
    constructor() {
        super()
    }

    componentDidMount() {
        this.props.searchTinto()
    }

    render() {
        const { tinto } = this.props
        return (
            <div>
                <Vinos vinos={tinto}></Vinos>
            </div>

        )
    }
}


const mapStateToProps = function (state, ownProps) {
    return {

        tinto: state.winesReducers.categoryTintos
    }
};




const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        searchTinto: () => (dispatch(searchTinto()))


    }

}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryTintoContainer);

//const { allWines } = this.props