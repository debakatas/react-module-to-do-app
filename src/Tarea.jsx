import React from 'react';

const Tarea = (props) => {
    const [tachado, cambiarTachado] = React.useState(false)

    let liClassname = "tareita";

    if(tachado) {
        liClassname += " tareita-tachada"
    }

    return (
        <li className={liClassname}>
            <input type="checkbox"
                onChange={
                    (e)=> {
                        cambiarTachado(e.target.checked)
                    }
                }
            />
            <h4>{props.titulo}</h4>
            <small>{props.contenido}</small>
        </li>
    );
}

export default Tarea;