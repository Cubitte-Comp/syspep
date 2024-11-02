import React, { useEffect, useState } from "react";
import { Table } from "../components/Table";
import { getUsers } from "../services/User";
Table

export const Managment = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => { 
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await getUsers();
    const data = await response.json();
    setUsers(data);
  };


  return (
    <>
      <div className="flex flex-col justify-center items-center w-full p-5">
        <h3 className="text-2xl font-bold p-5">Adimistrador de usuarios</h3>
        <Table data={users} reloadData={fetchData}/>
      </div>
    </>
  );
};
