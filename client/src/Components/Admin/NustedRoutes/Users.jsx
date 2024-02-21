import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useToken } from "../../../Context__Store/Store";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Users = () => {
  const [data, setData] = useState([]);
  const { config } = useToken();

  useEffect(() => {
    fetchData();
  }, [config]);

  const fetchData = () => {
    axios
      .get("http://localhost:3001/api/admin/users", config)
      .then((res) => {
        const response = res.data;
        setData(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleDeleteUser = (id) => {
    axios
      .delete(`http://localhost:3001/api/admin/users/delete/${id}`, config)
      .then(() => {
        fetchData();
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item._id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>
                  <Button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleDeleteUser(item._id)}
                  >
                    Delete
                  </Button>{" "}
                  <Button
                    type="button"
                    // className="btn btn-success"
                    style={{
                      background: "white",
                    }}
                  >
                    <Link to={`/admin/users/${item._id}/edit`}>Update</Link>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
