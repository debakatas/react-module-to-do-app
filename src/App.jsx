import React from 'react';
import Tarea from './Tarea'
import {hot} from 'react-hot-loader';

const App = () => {
    const [listadoTareas, cambiarListado] = React.useState([]);
    const [titulo, cambiarTitulo] = React.useState("")
    const [contenido, cambiarContenido] = React.useState("")


    return (
        <>
           <ul>
                {
                    listadoTareas.map(
                        (elemento)=> {
                            return (
                                <Tarea
                                    key={elemento.titulo}
                                    titulo={elemento.titulo}
                                    contenido={elemento.contenido}
                                />

                            )
                        }
                     )
                }
           </ul>
           <form action="">
               <input type="text"
                onChange={(evento)=>{
                    cambiarTitulo(evento.target.value)
                }}
               placeholder="Agrega titulo"/>
               <input type="text"
               onChange={(evento)=>{
                   cambiarContenido(evento.target.value)
                }}
               placeholder="Agrega content"/>
           </form>
           <button onClick={
               ()=>{
                const nuevaTarea = {
                    titulo: titulo,
                    contenido: contenido,
                }
                const nuevoListado = [
                    ...listadoTareas,
                    nuevaTarea
                ]

                cambiarListado(nuevoListado)
               }
           }>
               +
           </button>
        </>
    );
}

export default hot(module)(App);