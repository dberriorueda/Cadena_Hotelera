import { useEffect, useState } from "react";
import './Home.css'
export function Home(){
    return(

        <>
            <div className="banner">
                <div className="row">
                    <div className="col-12 col-md-4 text-white fw-bold">
                        <h3>Reserva con nosotros</h3>
                        <hr/>
                        <formulario></formulario>

                    </div>
                </div>
            </div>    
        </>
    )
}