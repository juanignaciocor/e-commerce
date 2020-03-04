import React, { Component, Fragment } from "react";
import SingleWine from "../components/SingleWine"
import axios from "axios"

export default class SingleWineContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            vinoSeleccionado: {}
        }
    }
    componentDidMount() {
        return (
            axios.get(`/api/wines/${this.props.match.params.id}`)
                .then(res => res.data)
                .then(vino => {
                    this.setState({ vinoSeleccionado: vino[0] })
                })
        )
    }

    render() {
        return (
            <Fragment>
                <SingleWine vinoSeleccionado={this.state.vinoSeleccionado} />
            </Fragment>
        )
    }
}

