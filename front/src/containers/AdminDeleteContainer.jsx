import React from "react"
import { connect } from "react-redux"
import AdminDelete from "../components/adminDelete"


class AdminDeleteContainer extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <AdminDelete></AdminDelete>
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
)(AdminDeleteContainer);

