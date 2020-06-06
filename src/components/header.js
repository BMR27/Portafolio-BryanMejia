import React from "react";
import ilustration from '../images/undraw_dev_productivity_umsq.svg';
import Form from './contact.form';

export default () => (
  <header className="bg-gray-300">
    <div className="container mx-auto p-12 max-w-4xl">
        
        <div className="flex justify-center items-center">
            <div className="flex-1">
                <h1 className="font-bold text-purple-700 text-6xl">¡Hola! Soy Bryan Mejia</h1>
                <p className="text-xl font-light">Soy Desarrollador Web y Amante de la Programacion</p>
                <p className="text-xl font-light">Egresado de la Universidad Castro Carazo</p>
                <p className="text-xl font-light">Ingeniero en Sistemas</p>
                
            </div>  
            <img src={ilustration} alt="Hombre seleccionando un elemento de un grid" style={{height:"300px"}}></img>
        </div>

        <div>
             <Form/>
        </div>
    </div>

  </header>
)
