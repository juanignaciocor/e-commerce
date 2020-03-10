import React from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import UserProfile from "../components/UserProfile"
import { showUserProfile } from "../redux/actions/cart"


class UserProfileContainer extends React.Component {
    constructor() {
        super()
    }
   
    // handlerClickUser(total) {
    //     this.props.showUserProfile()
    // }

    render() {
        const { userProfile } = this.props

        return (
            <div>
                <UserProfile user={userProfile} handlerClickUser={handlerClickUser}/>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        userProfile: {userLogged: state.userReducers.logged, userCart : state.cartReducers.searchCart}
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         showUserProfile: (userId) => (dispatch(showUserProfile(userId))),
//     }

// }
export default withRouter(connect(mapStateToProps, null)(UserProfileContainer));