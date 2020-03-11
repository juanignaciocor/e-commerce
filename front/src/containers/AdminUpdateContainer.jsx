import React from "react"
import { connect } from "react-redux"
import AdminCreate from "../components/adminCreate"
import AdminDelete from "../components/adminDelete"
import AdminUpdate from "../components/adminUpdate"


class AdminUpdateContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                ESTOY EN UPDATE
                <AdminUpdate></AdminUpdate>
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
)(AdminUpdateContainer);

