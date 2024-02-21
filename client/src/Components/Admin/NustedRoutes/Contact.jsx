import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useToken } from "../../../Context__Store/Store";
import { Button } from "react-bootstrap";

const Contacts = () => {
  const [data, setData] = useState([]);
  const { config } = useToken();
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/admin/contacts", config)
      .then((res) => {
        const response = res.data;
        console.log(response);
        setData(response);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <div style={{ maxWidth: "80%", margin: "0 auto" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Message</th> <th scope="col">Delete/Update</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr id={item.id}>
                <th scope="row">{item.name}</th>
                <td>{item.email}</td>
                <td>{item.message}</td>
                <td>
                  <Button type="button" className="btn btn-danger">
                    Delete
                  </Button>{" "}
                  <Button type="button" className="btn btn-success">
                    Update
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

export default Contacts;
