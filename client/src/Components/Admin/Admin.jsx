import axios from "axios";
import React, { useEffect, useState } from "react";

const AdminPanel = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/admin/users")
      .then((res) => {
        const response = res.data;
        console.log(response);
        setRecords(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h2>Admin Panel</h2>

      <div>
        {records.map((record) => (
          <div key={record.id}>
            <p>{record.name}</p>
            <p>{record.email}</p>
            <p>{record.phone}</p>
            <button>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
