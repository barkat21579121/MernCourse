import React from "react";
import { useToken } from "../Context__Store/Store";
import { Link } from "react-router-dom";

const About = () => {
  const { data } = useToken();
  console.log(data);
  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">
        Why Choose Me as Your MERN Stack Developer?
      </h1>
      <div className="row">
        <div className="col-md-6">
          <h2>Welcome {data ? `${data.name}` : "to my page"}</h2>
          <p>
            I have several years of experience working with the MERN stack,
            allowing me to efficiently build robust and scalable web
            applications.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Skills</h2>
          <p>
            My skills include proficiency in MongoDB, Express.js, React.js, and
            Node.js, along with expertise in front-end and back-end development.
          </p>
        </div>
      </div>
      <section className="bg-light py-5 mt-5">
        <h2 className="text-center mb-4">My Skills</h2>
        <div className="row" style={{ padding: "10px" }}>
          <div className="col-md-4 mb-4">
            <h3>Front-end</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Back-end</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h3>Additional Skills</h3>
            <ul>
              <li>Git</li>
              <li>Authentication</li>
              <li>Testing</li>
              <li>Deployment</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container py-5 mt-5">
        <h2 className="text-center mb-4">Contact Me</h2>
        <p className="text-center">
          Interested in working together or have any questions? Feel free to
          reach out!
        </p>
        <div className="text-center">
          <Link to="/contacts" className="btn btn-primary">
            Email Me
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
