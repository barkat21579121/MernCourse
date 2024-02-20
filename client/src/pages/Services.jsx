import React from "react";
import "./Services.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container, Row, Col } from "react-bootstrap";
const Services = () => {
  const services = [
    {
      title: "MERN Stack Development",
      description:
        "Custom web application development using MongoDB, Express.js, React.js, and Node.js.",
    },
    {
      title: "Responsive Web Design",
      description:
        "Creating websites that look great on all devices, from desktops to smartphones.",
    },
    {
      title: "API Integration",
      description:
        "Integrating third-party APIs to add functionality and enhance your web application.",
    },
    {
      title: "E-commerce Platform Development",
      description:
        "Building fully functional e-commerce platforms with features such as product management, user authentication, payment integration, and order processing.",
    },
    {
      title: "Mobile App Development",
      description:
        "Designing and developing mobile applications for iOS and Android platforms using native or cross-platform frameworks.",
    },
    {
      title: "Cloud Computing Solutions",
      description:
        "Implementing cloud-based solutions leveraging services like AWS, Azure, or Google Cloud to optimize scalability, reliability, and performance.",
    },
    {
      title: "Data Analytics",
      description:
        "Utilizing data analytics tools and techniques to extract insights and make data-driven decisions for businesses.",
    },
    {
      title: "Cybersecurity Solutions",
      description:
        "Implementing robust cybersecurity measures to protect against threats such as malware, phishing, and data breaches.",
    },
    {
      title: "Blockchain Development",
      description:
        "Creating decentralized applications (DApps) and smart contracts using blockchain technology for secure and transparent transactions.",
    },
  ];

  return (
    <Container>
      <Row className="justify-content-center">
        {services.map((service, index) => (
          <Col sm={6} md={4} key={index}>
            <Card className="service-card">
              <Card.Body>
                <Card.Title>{service.title}</Card.Title>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Services;
