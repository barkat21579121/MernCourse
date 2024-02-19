import React, { useEffect, useState } from "react";
import axios from "axios";
import { useToken } from "../Context__Store/Store";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: "",
    emailAddress: "",
    message: "",
  });
  const { data } = useToken();
  console.log("data", data);
  useEffect(() => {
    if (data && formData) {
      setFormData({
        emailAddress: data.email,
        name: data.name,
        message: "",
      });
    }
  }, []);

  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Reset any previous error state
    setSubmitError(false);

    axios
      .post("http://localhost:3001/api/form/contact", {
        name: formData.name,
        email: formData.emailAddress,
        message: formData.message,
      })
      .then((res) => {
        console.log("Response:", res.data);
        setSubmitSuccess(true);
        alert(
          "you message sent sucessFully . We will shortly contact you via Email"
        );
        setFormData({
          name: "",
          emailAddress: "",
          message: "",
        });
      })
      .catch((err) => {
        console.log("Error:", err);
        setSubmitError(true);
      });
  };

  return (
    <div className="container py-4">
      <div
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          padding: "20px",
        }}
      >
        <form onSubmit={handleSubmit} className="needs-validation">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className={`form-control form-control-sm ${
                formErrors.name && "is-invalid"
              }`}
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {formErrors.name && (
              <div className="invalid-feedback">{formErrors.name}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              id="emailAddress"
              type="email"
              name="emailAddress"
              className={`form-control form-control-sm ${
                formErrors.emailAddress && "is-invalid"
              }`}
              placeholder="Email Address"
              value={formData.emailAddress}
              onChange={handleChange}
              required
            />
            {formErrors.emailAddress && (
              <div className="invalid-feedback">{formErrors.emailAddress}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-control form-control-sm ${
                formErrors.message && "is-invalid"
              }`}
              placeholder="Message"
              style={{ height: "7rem" }}
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {formErrors.message && (
              <div className="invalid-feedback">{formErrors.message}</div>
            )}
          </div>

          <div className={submitSuccess ? "text-center mb-3" : "d-none"}>
            Form submission successful!
          </div>
          <div
            className={submitError ? "text-center text-danger mb-3" : "d-none"}
          >
            Error sending message!
          </div>

          <div className="text-center">
            <button
              id="submitButton"
              type="submit"
              className="btn btn-primary btn-sm"
              disabled={
                !formData.name || !formData.emailAddress || !formData.message
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
