import React from "react"
import { connect } from "react-redux"
import AdminCreate from "../components/adminCreate"


class AdminFormsContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                ESTOY EN CREATE
                <AdminCreate></AdminCreate>
            </div>
        )
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AdminFormsContainer);

