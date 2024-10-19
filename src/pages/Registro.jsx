import React, { useState } from "react";
import { toast } from "react-toastify";

export const Registro = () => {

    const [email,setEmail]= useState("");
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    
    const handleSubmit = async (e)=> {
      
        e.preventDefault();
        if([email, password, name, lastName, confirmPassword].includes("")){
          
            toast.error(" Todos los campos son obligatorios",{
                theme: "dark",
            });
            return;
        }
        if(password !== confirmPassword){
            toast.error(" Las contraseñas no coinciden",{
                theme: "dark",
            });
            return
        } 
        
        toast.success("Tu cuenta ha sido creada exitosamente, pero antes de que puedas acceder al sistema, es necesario que un administrador apruebe tu solicitud. ",{
            theme: "dark",
        });

        // try {
        //     // Realizar la solicitud a la API para obtener el token
        //     const apiData = {
        //         email: email,
        //         password: password
        //     };
          
        //     const response = await fetch('http://localhost:4000/login/auth', {
        //         method: 'POST',
        //         headers: {
        //           'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(apiData),credentials: 'include', 
        //       });
      
        //     // Verificar si la respuesta es exitosa y contiene un token
        //     if (response.ok) {
        //         const data = await response.json();
        //         document.cookie = `token=${data.token}; max-age=${60 * 60 * 24 * 7} path=/; samesite=strict`
        //       // Redirigir a la página principal
        //       navigate('/');
        //       window.location.reload();
        //     } else {
        //       // Mostrar un mensaje de error si la respuesta no es la esperada
        //       toast.error('Error al iniciar sesión. Verifica tus credenciales.', {
        //         theme: 'dark',
        //       });
        //     }
        //   } catch (error) {
        //     console.error('Error al iniciar sesión:', error);
        //     toast.error('Error al iniciar sesión. Inténtalo de nuevo más tarde.', {
        //       theme: 'dark',
        //     });
        //   }
    }
  return (
    <>
      <div className="flex justify-center items-center h-screen p-10">
        <div className="grid md:grid-cols-2 grid-cols-1 border rounded-3xl ">
          <div className="flex-1 hidden md:flex">
            <img src="src/img/logo.png"  alt="logo" className="rounded-3xl" />
          </div>
          <div className="flex justify-center items-center p-5" >
            <form  onSubmit={handleSubmit}>
              <h1 className="text-center mb-10 font-bold text-4xl"> Registro </h1>

              <label
                htmlFor="name"
                className="block text-gray-800 font-bold"
              >
                Nombres
              </label>
              <input
                type="text"
                id="name"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label
                htmlFor="lastName"
                className="block text-gray-800 font-bold"
              >
                Apellidos
              </label>
              <input
                type="text"
                id="lastName"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <label
                htmlFor="email"
                className="block text-gray-800 font-bold"
              >
                Email:
              </label>
              <input
                type="text"
                id="email"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label
                htmlFor="password"
                className="block text-gray-800 font-bold"
              >
                contraseña:
              </label>
              <input
                type="password"
                id="password"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="password"
                className="block text-gray-800 font-bold"
              >
                confirma tu contraseña:
              </label>
              <input
                type="password"
                id="confirmPassword"
                className=" bg-gray-100 border outline-none rounded-md py-3 w-full px-4 mb-6"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />

              <button
                type="submit"
                className=" bg-blue-700 hover:bg-blue-500 border outline-none rounded-md py-3 w-full px-4 font-semibold text-white"
              >
                Crear cuenta
              </button>

              <div className="flex gap-2 pt-5">
                <p className="text-gray-600 text-sm">Ya tienes una cuenta?</p>
                <a className="text-gray-600 text-sm underline" href="/register">
                  Inicia sesión aquí
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
