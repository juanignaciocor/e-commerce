import React, { Component, useReducer } from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { showsWines } from "../redux/actions/wines"


class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearInput: ""
    }
    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onSearch(e) {
    e.preventDefault()
    this.props.showsWines(this.state.clearInput)
      .then(() => this.setState({ clearInput: '' })).then(() => {
        this.props.history.push("/wines/search")
      })
  }

  onChange(e) {
    this.setState({ clearInput: e.target.value })
  }

  render() {
    const { vinos } = this.props
    return (
      <Navbar onSearch={this.onSearch} vinos={vinos} onChange={this.onChange} clearInput={this.state.clearInput} />
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     user: state.userReducers.logged
//   }
// }

const matchDispatchToProps = function (dispatch, ownprops) {
  return {
    showsWines: (vino) => dispatch(showsWines(vino)),
  }
}

export default withRouter(connect(null, matchDispatchToProps)(NavbarContainer));
