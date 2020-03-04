import React, {Component} from "react";
import { connect } from "react-redux";
import Vinos from "../components/Vinos";

class VinosContainer extends Component {
    constructor(props){
      super(props);
    }
  
    render () {
      return (
        <Vinos vinos = {this.props.vinos}/>
      )
    }
  }
  
  const mapStateToProps = (state, ownProps) => {
    return {
        vinos: state.winesReducers.vinosBusqueda
    };
  };

export default connect(mapStateToProps, null)(VinosContainer);
