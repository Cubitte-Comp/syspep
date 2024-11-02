import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateUser } from "../services/User";

export const UpdateUserModal = ({ onClose, user, reloadData }) => {
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");
  const [iduser, setIduser] = useState("");

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };
  const changeStatus = async (e) => {
    const confirmUpdate = window.confirm(
      "¿Estás seguro de que deseas actualizar los datos del usuario?"
    );
    if (confirmUpdate) {
      try {
        const result = await updateUser(iduser, role, status );
        toast.success("Usuario actualizado correctamente");
        console.log(result);
        onClose();
        reloadData();
      } catch (error) {
        toast.error("Error al actualizar el usuario");
        console.error(error);
      }
    }
  };
  const handleStatusChange = (e) => {
    setStatus(status, role);
    setStatus(e.target.value);
  };

  useEffect(() => {
    console.log(user);
    setRole(user.typeuser);
    setStatus(user.state);
    setIduser(user.id);
  }, [user]);

  return (
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
            <option value="">Seleccionar Roles</option>
            <option value="1">Invitado</option>
            <option value="2">Administrador</option>
            <option value="3">Tecnico</option>
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
            <option value="true">Activo</option>
            <option value="false">Inactivo</option>
          </select>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-end space-x-2">
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={changeStatus}
          >
            Guardar Cambios
          </button>
        </div>
      </div>
    </div>
  );
};
