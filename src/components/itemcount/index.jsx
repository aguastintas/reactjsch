import React, { useState } from 'react';

const ItemCountComponent = (props) => {
    const [contador, setContador] = useState ([]);

    return (
        <>
        <button className="btn btn-outline-secondary" onClick={() => { setContador([...contador, {name:'-1'}]) }}>-</button>
        <input type=""/>
        <button className="btn btn-outline-secondary" onClick={() => { setContador([...contador, {name:'+1'}]) }}>+</button>
        {console.log(contador)}
        <button>Agregar al carrito</button>
        </>
    );
}

export default ItemCountComponent;