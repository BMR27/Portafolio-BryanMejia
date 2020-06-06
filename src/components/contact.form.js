import React from "react";


export default () => (
    <form className="mt-16 text-center" name="contact" action="https://formspree.io/xvowaddb" method="post">
        <label htmlFor="contact-content" className="block text-gray-700 text-sm font-bold mb-2">Cuentame de esa idea que quieres hacer realidad: </label>
        <div className="font-bold text-purple-700 flex shadow rounded bg-white border p-2">
          <label className="flex shadow rounded border-purple-300 border p-2">Nombre:</label>
          <input className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" type="text" name="name"></input>
        </div>
        <br/>
        <div className="font-bold text-purple-700 flex shadow rounded bg-white border p-2">
          <label className="flex shadow rounded border-purple-300 border p-2">Email:</label>
          <input className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" type="email" name="_replyto"></input><br/>
        </div>
        <br/>
        <div className="font-bold text-purple-700 flex shadow rounded bg-white border p-2">
          <label className="flex shadow rounded border-purple-300 border p-2">Mensaje:</label>
          <textarea className="flex-1 py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline" type="mensaje" name="mensaje"></textarea><br/>
        </div>
       <br/>
       <button className="btn ml-4" type="submit" value="Send" >Enviar</button>
    </form>
    
);