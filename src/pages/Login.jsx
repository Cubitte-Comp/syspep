import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useUser } from "../hooks/useUser";

export const Login = () => {
    const navigate = useNavigate();
    const [email,setEmail]= useState("");
    const [password, setPassword] = useState("")
    const auth = useUser() ;   
  
    const handleSubmit = async (e)=> {
      
        e.preventDefault();
        if([email,password].includes("")){
          
            toast.error(" Todos los campos son obligatorios",{
                theme: "dark",
            });
            return;
        }     

        try {
            // Realizar la solicitud a la API para obtener el token
            
            const response = await fetch('http://localhost:3030/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({email, password}), 
              });
      
            // Verificar si la respuesta es exitosa y contiene un token
            if (response.ok) {
                const data = await response.json();

                if(!data.state){
                  toast.info("Aún no tienes acceso al sistema, comunicate con el administrador para darte de alta",{
                    theme: "dark",
                  })
                  return;
                }
                console.log(data);
                auth.saveUser(data); 
              // Redirigir a la página principal
              // navigate('/dashboard');
              window.location.reload();
            } else {
              // Mostrar un mensaje de error si la respuesta no es la esperada
              toast.error('Error al iniciar sesión. Verifica tus credenciales.', {
                theme: 'dark',
              });
              return;
            }


          } catch (error) {
            console.error('Error al iniciar sesión:', error);
            toast.error('Error al iniciar sesión. Inténtalo de nuevo más tarde.', {
              theme: 'dark',
            });
          }
  }

  if(auth.isAuthenticated){
    return <Navigate to='dashboard' />
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen p-10 ">
        <div className="grid md:grid-cols-2 grid-cols-1  border rounded-3xl">
          <div className="">
            <img src="src/img/logo.png" className="rounded-3xl" alt="logo" />
          </div>
          <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit}>
              <h1 className="text-center mb-10 font-bold text-4xl"> Login </h1>

              <label htmlFor="email" className="block text-gray-800 font-bold">
                Email:
              </label>
              <input
                type="text"
                id="email"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password" className="block text-gray-800 font-bold">
                password:
              </label>
              <input
                type="password"
                id="Password"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>

              <button
                type="submit"
                className=" bg-blue-700 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
              >
                Iniciar Sesion
              </button>

              <div className="flex gap-2 pt-5">
                <p className="text-gray-600 text-sm">No tienes una cuenta?</p>
                <Link className="text-gray-600 text-sm underline" to="/registro">
                  Registrate aqui
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
