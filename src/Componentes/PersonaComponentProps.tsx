import React from "react";
import { Persona } from "../Modelos/Persona";

export default function PersonaComponentProps(props:Persona){
    return (
        <div>
            
            <div className="persona-card">
                <h2>{props.nombre}</h2>
                <ul>
                    <li>Ocupación: {props.ocupacion}</li>
                    <li><strong>País:</strong> {props.pais}</li>
                </ul>
             </div>

        </div>
        

    )


}