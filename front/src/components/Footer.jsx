import React from "react"
/******* Descomentar esto de abajo cuando sea necesario ******
 import { Link } from "react-router-dom"
*/

export default ({ }) => {
    return (
        <div style={{ position: "fixed", bottom: 0, height: "9.5vh", width: "100%", display: "block" }}>
            <div className="card">

                <section id="lab_social_icon_footer">
                    <div className="container">
                        <div className="text-center center-block">
                            <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                            <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                            <a href="mailto:#"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                        </div>
                    </div>
                </section>
                {/* <blockquote className="blockquote mb-0"> */}
                <footer >
                    <div className="footer-copyright text-center py-3">
                        © 2020 Copyright: Equipo 5
            </div>
                </footer>
                {/* </blockquote> */}
            </div>
        </div>
    )
}

