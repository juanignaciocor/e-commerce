import React from "react";
import { Link } from "react-router-dom";

export default ({ handlerClick1 }) => {
    return (
        <nav aria-label="...">
            <ul className="pagination">
                <li className="page-item disabled">
                    
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                </li>
                <li className="page-item">
                    <Link to="/allWines/1" className="page-link" >1</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/2" className="page-link" >2</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/3" className="page-link" >3</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/4" className="page-link" >4</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/5" className="page-link" >5</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/6" className="page-link" >6</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/7" className="page-link" >7</Link>
                </li>
                <li className="page-item">
                    <Link to="/allWines/8" className="page-link" >8</Link>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>
    )
}


