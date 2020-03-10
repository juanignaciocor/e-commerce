import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import UserProfile from "../components/UserProfile"
import { showUserProfile } from "../redux/actions/cart"


class UserProfileContainer extends React.Component {
    constructor() {
        super()
    }
   
    render() {
        const { userProfile } = this.props

        return (
            <div>
                <UserProfile user={userProfile} />
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        userProfile: state.userReducers.logged
    }
}

export default withRouter(connect(mapStateToProps, null)(UserProfileContainer));