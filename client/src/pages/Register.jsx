import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";
import { useToken } from "../Context__Store/Store";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });
  const { updateToken } = useToken();
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    axios
      .post("http://localhost:3001/api/auth/register", {
        name: user.name,
        email: user.email,
        password: user.password,
        phone: user.phone,
      })
      .then((res) => {
        setUser({
          name: "",
          email: "",
          password: "",
          phone: "",
        });
        updateToken(res.data.token);
        setModalMessage("User Created Successfully. You can now login.");
        setShowModal(true);
      })
      .catch((error) => {
        setModalMessage(error.response.data.message);
        setShowModal(true);
      });
  };

  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="name"
                            className="form-control"
                            value={user.name}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="name">
                            Your Name
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="email"
                            className="form-control"
                            value={user.email}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="">
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={user.password}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="password">
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-phone fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="tel"
                            id="phone"
                            className="form-control"
                            value={user.phone}
                            onChange={handleChange}
                          />
                          <label className="form-label" htmlFor="phone">
                            Phone Number
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        style={{
          backgroundColor: "#f0f0f0",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Modal.Header
          closeButton
          style={{ backgroundColor: "#fff", borderBottom: "none" }}
        >
          <Modal.Title style={{ color: "#333" }}>Message</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ padding: "20px" }}>
          <p style={{ color: "#dc3545" }}>{modalMessage}</p>
        </Modal.Body>
        <Modal.Footer style={{ backgroundColor: "#fff", borderTop: "none" }}>
          <Button
            variant="secondary"
            onClick={handleCloseModal}
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Register;
