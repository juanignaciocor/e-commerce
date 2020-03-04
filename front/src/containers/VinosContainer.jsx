import React, {Component} from "react";
import { connect } from "react-redux";
import Vinos from "../components/Vinos";

class VinosContainer extends Component {
    constructor(props){
      super(props);
      this.onSearch = this.onSearch.bind(this)
    }
  
    onSearch(e){
        this.props.fetchSearchMovies(e)
    }
 
    render () {
      return (
        <Vinos onSearch ={this.onSearch}/>
      )
    }
  }
  
const mapStateToProps = (state, ownProps) => {
    return {
        vinos: state.vinos
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        vinos: state.vinos
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(VinosContainer);
