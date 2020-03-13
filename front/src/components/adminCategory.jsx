import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
export default ({ newCategory, handleCategory, nombreCategoria }) => (
    <div>
        <form onSubmit={newCategory}>
            <input type="text"
                placeholder="Nombre de la categoria"
                onChange={handleCategory}
                value={nombreCategoria}></input>
            <input type="submit"></input>
        </form>
    </div>

);




