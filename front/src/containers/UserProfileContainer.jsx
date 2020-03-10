import React, {useEffect} from 'react';
import { connect } from "react-redux"
import { withRouter } from "react-router";
import UserProfile from "../components/UserProfile"
import { showOrderProfile } from "../redux/actions/users"

class UserProfileContainer extends React.Component {
    constructor() {
        super()
    }
    
    componentDidMount(){
        this.props.showOrderProfile(this.props.userId)
    }
    
    render() {
        const { orderProfile } = this.props
        console.log(this.props)
        return (
            <div>
                <UserProfile orderProfile={orderProfile} props={this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        orderProfile: state.userReducers.orderProfile,
        userId : state.userReducers.logged.id
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showOrderProfile: (userId) => (dispatch(showOrderProfile(userId))),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfileContainer));