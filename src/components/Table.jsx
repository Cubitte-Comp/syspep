import React, { useState } from "react";
import { UpdateUserModal } from "./UpdateUserModal";

export const Table = ({data, reloadData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const toggleModal = (user) => {
    setCurrentUser(user);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 table-fixed shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Id
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
            {data.map((user) => (
                <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{user.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.name+ ' '+user.lastname}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{
                        // 1 = Administrador, 2 = Tecnico, 3 = Invitado
                        user.typeuser === 1 ? 'Invitado' : user.typeuser === 2 ?  'Administrador' : 'Tecnico'
                        
                        }</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${user.state ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {user.state ? 'Activo' : 'Inactivo'}
                        </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                        onClick={()=>toggleModal(user)}>
                            Edit
                        </button>
                        
                        <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                            Delete
                        </button>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>


      {/* Modal */}
      {isOpen && <UpdateUserModal onClose={toggleModal} user={currentUser} reloadData={reloadData}/>}
      
    </>
  );
};
