import React, {Component} from "react";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import { showsWines } from "../redux/actions/wines"

class NavbarContainer extends Component {
    constructor(props){
      super(props);
      this.onSearch = this.onSearch.bind(this)
  }

  onSearch(e){
    console.log(e)
    this.props.showsWines(e)
  }

  render () {
    const { vinos } = this.props

    return (
      <Navbar onSearch ={this.onSearch} vinos={vinos}/>
    )
  }
}

const matchDispatchToProps = function( dispatch, ownprops ) {
  return {
    showsWines : (vino) => dispatch(showsWines(vino)),
  }
}

export default connect(null, matchDispatchToProps)(NavbarContainer);
