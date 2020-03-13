import React, { Component, useReducer } from "react";
import Navbar from "../components/Navbar";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { showsWines } from "../redux/actions/wines"
import { logOut, LogueoCoockie } from "../redux/actions/users"
import { fetchAllCategory } from "../redux/actions/category"

class NavbarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clearInput: "",
      dropdownOpen: false
    }
    this.onSearch = this.onSearch.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onLogout = this.onLogout.bind(this)
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  componentDidMount() {
    this.props.fetchAllCategory()
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

  onLogout() {
    this.props.logOut()
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }




  render() {
    const { vinos, allCategory } = this.props
    return (
      <Navbar
        user={this.props.user}
        onMouseLeave={this.onMouseLeave} toggle={this.toggle}
        dropdownOpen={this.state.dropdownOpen}
        onMouseEnter={this.onMouseEnter}
        onLogout={this.onLogout}
        onSearch={this.onSearch}
        vinos={vinos}
        onChange={this.onChange}
        clearInput={this.state.clearInput}
        onMouseOver={this.onMouseOver}
        allCategory={allCategory} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.userReducers.logged,
    allCategory: state.categoryReducers.allCategory

  }
}

const matchDispatchToProps = function (dispatch, ownprops) {
  return {
    showsWines: (vino) => dispatch(showsWines(vino)),
    logOut: () => dispatch(logOut()),
    fetchAllCategory: () => dispatch(fetchAllCategory())




  }
}

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(NavbarContainer));
