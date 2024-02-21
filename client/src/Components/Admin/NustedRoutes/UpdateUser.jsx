import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useToken } from "../../../Context__Store/Store";

const UpdateUser = () => {
  const [userIdData, setUserIdData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const params = useParams();
  const { config } = useToken();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3001/api/admin/users/${params.id}`,
        config
      );
      setUserIdData(response.data);
      updateUser();
      // console.log(userIdData);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const updateUser = async () => {
    try {
      await axios.patch(
        `http://localhost:3001/api/admin/users/update/${params.id}`,
        userIdData,
        config
      );
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  useEffect(() => {
    handleSubmit();
    updateUser();
  }, []);

  const handleOnChange = (e) => {
    setUserIdData({
      ...userIdData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container py-4">
      <form onSubmit={handleSubmit} className="needs-validation">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="form-control form-control-sm"
            placeholder="Name"
            value={userIdData.name}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="form-control form-control-sm"
            placeholder="Email Address"
            value={userIdData.email}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            className="form-control form-control-sm"
            placeholder="Phone"
            value={userIdData.phone}
            onChange={handleOnChange}
            required
          />
        </div>

        <div className="text-center">
          <button
            id="submitButton"
            type="submit"
            className="btn btn-primary btn-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;
