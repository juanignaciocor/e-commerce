import React from "react"
/******* Descomentar esto de abajo cuando sea necesario ******
import { Link } from "react-router-dom"
*/

export default ({ }) => {
    return (
        <div>
            <div className="card">
                <div className="card-header">
                    Quote
        </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                        <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                            <div class="footer-copyright text-center py-3">© 2020 Copyright: <cite title="Source Title">Equipo 5, Palataforma5</cite>
                            </div>
                        </footer>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}

