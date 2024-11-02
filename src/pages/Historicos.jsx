import React, { useEffect, useState } from 'react'
import { getPred } from '../services/Predict';
import { toast } from 'react-toastify';
import { Percent, Shapes, SquareAsterisk } from 'lucide-react';

export const Historicos = () => {
    const [data, setData] = useState(null);


    const fetchData = async () => {

        try {

            const response = await getPred();
            if (response.ok) {
                const data = await response.json();
                // Limpiar los estados después de guardar los cambios
                // console.log(data);
                setData(data);
            } else {
                console.error("Error al subir la imagen");
            }
        } catch (error) {
            console.log(error);

        }

    };

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <>
            <div className='w-full text-center text-2xl p-2 font-bold'>Historicos</div>

            <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">

                    {data && data.map((item, index) => (
                        <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col leading-normal" key={index} id={item.id}>

                            <img src={item.imageurl} className="w-full mb-3 object-contain max-h-full" />
                            <div className="p-4 pt-2">
                                <div className="mb-8">
                                    <p className="text-sm text-gray-600 flex items-center">
                                        <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20">
                                            <path
                                                d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                                            </path>
                                        </svg>
                                        Members only
                                    </p>
                                    {item.results && item.results.map((res, index) => (
                                        <div className="flex flex-col w-full mb-1" key={index}>
                                            <div className="border-b border-[#9c8349] bg-gray-50 hover:bg-gray-100 p-4 transition-colors duration-300">
                                                <div className="mt-1 fill-current flex gap-2">
                                                    <SquareAsterisk className="bg-green-100 rounded" />
                                                    <span>Id Clase:</span>
                                                    <span className=" bg-purple-400/25 bg-opacity-10 px-4 rounded">
                                                        {" "}
                                                        {res.class_id}
                                                    </span>
                                                </div>
                                                <div className="mt-1 fill-current flex gap-2">
                                                    <Shapes className="bg-green-100 rounded" />
                                                    <span>Clase:</span>
                                                    <span className=" bg-purple-400/25 bg-opacity-10 px-4 rounded">
                                                        {res.class}
                                                    </span>
                                                </div>
                                                <div className="mt-1 fill-current flex gap-2">
                                                    <Percent className="bg-green-100 round" />
                                                    <span>Confidence:</span>
                                                    <span className=" bg-purple-400/25 bg-opacity-10 px-4 rounded">
                                                        {" "}
                                                        {res.confidence}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                    }
                                    <p className='text-gray-700 text-bold'>
                                        Coordenadas :
                                        {`${item.altitud}, ${item.latitud}` || "No hay coordenadas"}
                                    </p>
                                    <p className="text-gray-700 text-sm">{item.ubicacion}</p>
                                </div>
                                <div className="flex items-center">
                                    <a
                                        href="#"><img className="w-10 h-10 rounded-full mr-4" src="./src/img/user.png" alt="Avatar" /></a>
                                    <div className="text-sm">
                                        <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">{item.operador}</a>
                                        <p className="text-gray-600">{item.fecha_prediccion}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))

                    }

{/* 
                    <div
                        className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                        <img src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500" className="w-full mb-3" />
                        <div className="p-4 pt-2">
                            <div className="mb-8">
                                <p className="text-sm text-gray-600 flex items-center">
                                    <svg className="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20">
                                        <path
                                            d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z">
                                        </path>
                                    </svg>
                                    Members only
                                </p>
                                <a href="#" className="text-gray-900 font-bold text-lg mb-2 hover:text-indigo-600 inline-block">Can
                                    coffee make you a better developer?</a>
                                <p className="text-gray-700 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                            </div>
                            <div className="flex items-center">
                                <a
                                    href="#"><img className="w-10 h-10 rounded-full mr-4" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
                                <div className="text-sm">
                                    <a href="#" className="text-gray-900 font-semibold leading-none hover:text-indigo-600">Jonathan
                                        Reinink</a>
                                    <p className="text-gray-600">Aug 18</p>
                                </div>
                            </div>
                        </div>
                    </div> */}




                </div>
            </div>

            <div className='max-w-screen-xl mx-auto' id='chart'>


            </div>
        </>
    )
}
