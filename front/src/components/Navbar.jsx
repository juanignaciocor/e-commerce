import React, { useRef } from "react";
import { Link } from "react-router-dom";
import cart from "../../assets/cart.svg"

export default ({ onSearch, vinos, clearInput, onChange, user, onLogout }) => {
    const ref = useRef(null)
    return (

        <div>
            <nav className=" navegador navbar  navbar-expand-lg navbar-light  ">
                <Link to="/" className="navbar-brand" ><button className="btn btn-dark my-2 my-sm-2">WINERY</button></Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item botones">
                            <Link to="/register" className="nav-link" >Register </Link>
                        </li>
                        <li className="nav-item botones">
                            <Link to="/login" className="nav-link" >Log In </Link>
                        </li>
                        <li className="nav-item botones" onClick={onLogout} >
                            <Link to="/login" className="nav-link"  >Log Out</Link>
                        </li>
                        <li className="nav-item botones">
                            <Link className="nav-link" to="/allWines">All Products </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/category/red" className="dropdown-item" >Red</Link>
                                <Link to="/category/white" className="dropdown-item">White</Link>
                                <Link to="/category/rose" className="dropdown-item">Rose</Link>
                            </div>
                        </li>
                    </ul>
                    <Link to="/cart"><button type="button" className="btn btn-secondary" id="btnCartNav">  <img className="imgCarrito" src={cart} /> </button></Link>
                    <form className="form-inline my-2 my-lg-0" onSubmit={onSearch}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={ref} value={clearInput} onChange={onChange}></input>
                        <button className="btn btn-outline-secondary my-2 my-sm-0" type="submit" >Search</button>
                    </form>
                </div>
            </nav>
        </div>
    )
};
