import React, { useState } from "react";
import { toast } from "react-toastify";

export const Managment = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };
  const changeStatus = (e) => {
    toast.success("Usuario actualizado correctamente");
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full p-5">
        <h3 className="text-2xl font-bold p-5">Adimistrador de usuarios</h3>
        <table className="min-w-full divide-y divide-gray-200 table-fixed shadow-lg rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100">
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
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Douglas Cac</td>
              <td className="px-6 py-4 whitespace-nowrap">
                douglascacc2@gmail.com
              </td>
              <td className="px-6 py-4 whitespace-nowrap">Administrador</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Activo
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                  Edit
                </button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
              <td className="px-6 py-4 whitespace-nowrap">john@gmail.com</td>
              <td className="px-6 py-4 whitespace-nowrap">Tecnico</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                  Inactivo
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                  onClick={toggleModal}
                >
                  Edit
                </button>
                <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-96">
              <h2 className="text-xl font-semibold mb-4">Editar Roles y Permisos</h2>

              {/* Select para cambiar Role */}
              <div className="mb-4">
                <label
                  htmlFor="role"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cambiar Role
                </label>
                <select
                  id="role"
                  value={role}
                  onChange={handleRoleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Seleccionar Role</option>
                  <option value="admin">Administrador</option>
                  <option value="user">Tecnico</option>
                  <option value="guest">Invitado</option>
                </select>
              </div>

              {/* Select para cambiar Status */}
              <div className="mb-4">
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700"
                >
                  Cambiar Estado
                </label>
                <select
                  id="status"
                  value={status}
                  onChange={handleStatusChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Seleccionar Estado</option>
                  <option value="active">Activo</option>
                  <option value="inactive">Inactivo</option>
                  <option value="suspended">Suspendido</option>
                </select>
              </div>

              {/* Botones de acción */}
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                  onClick={toggleModal}
                >
                  Cancelar
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                onClick={changeStatus}>
                  Guardar Cambios
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
