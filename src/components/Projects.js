import React, { useEffect, useState } from "react";
import workoutApp from "../assets/workout-app-vid.mp4";
import proshop from "../assets/proshop-vid.mp4";
import toDo from "../assets/mern-todo.mp4";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  const [showFitnessModal, setShowFitnessModal] = useState(false);
  const [showProshopModal, setShowProshopModal] = useState(false);
  const [showTodoModal, setShowTodoModal] = useState(false);

  const handleCloseFitnessModal = () => setShowFitnessModal(false);
  const handleShowFitnessModal = () => setShowFitnessModal(true);

  const handleCloseProshopModal = () => setShowProshopModal(false);
  const handleShowProshopModal = () => setShowProshopModal(true);

  const handleCloseTodoModal = () => setShowTodoModal(false);
  const handleShowTodoModal = () => setShowTodoModal(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="Projects">
      <div className="container text-center">
        <h2 className="mb-4 fw-bold project-heading">Projects</h2>
        <Container>
          <Row className="d-flex">
            <Col
              data-aos="fade-right"
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                boxShadow: "1rem 1rem 2rem black",
              }}
              className="my-5 proj-card"
            >
              <h3 className="pt-2 text-light project-name">
                "Let's Fit Swole" Fitness App
              </h3>
              <video controls loop className="video-fluid w-50">
                <source src={workoutApp} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="proj-buttons mb-5">
                <Button onClick={handleShowFitnessModal} className="mx-2">
                  More Info
                </Button>
                <Button href="https://github.com/Karns11/Lets-Fit-Swole">
                  Source Code
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="d-flex">
            <Col
              data-aos="fade-left"
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                boxShadow: "1rem 1rem 2rem black",
              }}
              className="my-5 proj-card"
            >
              <h3 className="pt-2 text-light project-name">
                "ProShop" eCommerce Site
              </h3>
              <video controls loop className="video-fluid w-50">
                <source src={proshop} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="proj-buttons mb-5">
                <Button onClick={handleShowProshopModal} className="mx-2">
                  More Info
                </Button>
                <Button href="https://github.com/Karns11/MERN-app">
                  Source Code
                </Button>
              </div>
            </Col>
          </Row>

          <Row className="d-flex">
            <Col
              data-aos="fade-right"
              style={{
                border: "2px solid black",
                borderRadius: "15px",
                boxShadow: "1rem 1rem 2rem black",
              }}
              className="my-5 proj-card"
            >
              <h3 className="pt-2 text-light project-name">
                MERN Stack To-Do App
              </h3>
              <video controls loop className="video-fluid w-50">
                <source src={toDo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="proj-buttons mb-5">
                <Button onClick={handleShowTodoModal} className="mx-2">
                  More Info
                </Button>
                <Button href="https://github.com/Karns11/MERN-Todo-App">
                  Source Code
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MODALS */}
      <Modal show={showFitnessModal} onHide={handleCloseFitnessModal}>
        <Modal.Header closeButton>
          <Modal.Title>"LET'S FIT SWOLE FITNESS APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Introducing a dynamic MERN fitness app! Created through self-taught
          skills, this app revolutionizes your fitness journey. With a
          user-friendly interface, it empowers individuals to customize workouts
          according to their preferences and fitness goals. The app goes beyond
          individual training, fostering a collaborative community where users
          can connect, motivate, and support each other. By categorizing
          workouts by day, users can easily plan and track their progress
          throughout the week, ensuring a well-rounded fitness routine.
          Developed with passion and dedication, this MERN fitness app is poised
          to make a significant impact on the lives of fitness enthusiasts. Stay
          tuned for its imminent deployment and embark on a transformative
          fitness experience.
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              className="modal-close-button"
              variant="secondary"
              onClick={handleCloseFitnessModal}
            >
              Close
            </Button>
            <Button
              className="modal-code-button"
              variant="secondary"
              onClick={handleCloseFitnessModal}
              href="https://github.com/Karns11/Lets-Fit-Swole"
            >
              Source Code
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={showProshopModal} onHide={handleCloseProshopModal}>
        <Modal.Header closeButton>
          <Modal.Title>PROSHOP ECOMMERCE SITE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Presenting an exceptional MERN-based ProShop eCommerce site,
          meticulously crafted for a valued client. This feature-rich platform
          showcases the seamless integration of the MERN stack, offering a
          comprehensive user experience. Boasting top-notch authentication and
          authorization features, users can securely create accounts, manage
          their profiles, and make purchases with confidence. Additionally, the
          site empowers administrators with exclusive capabilities to oversee
          product inventory, manage orders, and optimize the overall shopping
          experience. The dedication and expertise invested in building this
          ProShop eCommerce site ensures a robust, user-friendly, and scalable
          solution that meets the client's business needs. Witness the power of
          this extraordinary platform soon!
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              className="modal-close-button"
              variant="secondary"
              onClick={handleCloseFitnessModal}
            >
              Close
            </Button>
            <Button
              className="modal-code-button"
              variant="secondary"
              onClick={handleCloseFitnessModal}
              href="https://github.com/Karns11/MERN-app"
            >
              Source Code
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
      <Modal show={showTodoModal} onHide={handleCloseTodoModal}>
        <Modal.Header closeButton>
          <Modal.Title>MERN STACK TO-DO APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Allow me to introduce my extraordinary MERN stack ToDo app, a
          testament to my journey as a full-stack developer. This project holds
          a special place in my heart as it marks my first venture into the
          world of MERN stack development, providing me with invaluable learning
          experiences. I'm thrilled to share that this app is packed with
          fantastic features that have helped me grasp the ins and outs of full
          stack development. As a personal user, I can confidently say that this
          app has become an indispensable tool in my daily routine, and I
          couldn't be happier with how it has turned out. It's a true reflection
          of my dedication and growth as a developer.
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              className="modal-close-button"
              variant="secondary"
              onClick={handleCloseFitnessModal}
            >
              Close
            </Button>
            <Button
              className="modal-code-button"
              variant="secondary"
              onClick={handleCloseFitnessModal}
              href="https://github.com/Karns11/MERN-Todo-App"
            >
              Source Code
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </section>
  );
};

export default Projects;
