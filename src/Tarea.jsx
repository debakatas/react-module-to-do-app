import React from 'react';

const Tarea = (props) => {
    return (
        <li className="tareita">
            <input type="checkbox"
                onChange={

                    (e)=> {
                        console.log(e.target.checked);
                    }
                }
            />
            <h4>{props.titulo}</h4>
            <small>{props.contenido}</small>
        </li>
    );
}

export default Tarea;