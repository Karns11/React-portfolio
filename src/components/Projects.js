import React, { useEffect, useState } from "react";
import NbaStats from "../assets/NBA-Stats.jpg";
import { Col, Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import letsFitSwole from "../assets/letsfitswole.png";
import proshop from "../assets/proshop.png";

import {
  Button as MuiButton,
  Modal as MuiModal,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";

const Projects = () => {
  const [showFitnessModal, setShowFitnessModal] = useState(false);
  const [showProshopModal, setShowProshopModal] = useState(false);
  const [showNbaStatsModal, setShowNbaStatsModal] = useState(false);

  const handleCloseFitnessModal = () => setShowFitnessModal(false);
  const handleShowFitnessModal = () => setShowFitnessModal(true);

  const handleCloseProshopModal = () => setShowProshopModal(false);
  const handleShowProshopModal = () => setShowProshopModal(true);

  const handleCloseNbaStatsModal = () => setShowNbaStatsModal(false);
  const handleShowNbaStatsModal = () => setShowNbaStatsModal(true);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section id="Projects" className="bg-light">
      <div className="container proj-container text-center">
        <h2 className="mb-4 fw-bold project-heading">Projects</h2>

        <Row className="d-flex align-items-center justify-content-center ">
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
            <img className="proj-img" src={letsFitSwole} alt="lets fit swole" />
            <div className="proj-buttons mb-5">
              <MuiButton
                variant="contained"
                color="secondary"
                className="swole-btn mx-2"
                onClick={handleShowFitnessModal}
              >
                More Info
              </MuiButton>
              <MuiButton
                className="demo-btn"
                variant="contained"
                color="secondary"
                href="https://letsfitswole.onrender.com"
              >
                Live Demo
              </MuiButton>
            </div>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center ">
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
            <img className="proj-img" src={proshop} alt="proshop" />
            <div className="proj-buttons mb-5">
              <MuiButton
                variant="contained"
                color="secondary"
                onClick={handleShowProshopModal}
                className="mx-2"
              >
                More Info
              </MuiButton>
              <MuiButton
                variant="contained"
                color="secondary"
                href="https://proshop-7ryx.onrender.com/"
                className="demo-btn"
              >
                Live Demo
              </MuiButton>
            </div>
          </Col>
        </Row>

        <Row className="d-flex align-items-center justify-content-center ">
          <Col
            data-aos="fade-left"
            style={{
              border: "2px solid black",
              borderRadius: "15px",
              boxShadow: "1rem 1rem 2rem black",
            }}
            className="my-5 proj-card"
          >
            <h3 className="pt-2 text-light project-name">NBA STATS APP</h3>
            <img className="proj-img" src={NbaStats} alt="NBA stats app"></img>
            <div className="proj-buttons mb-5">
              <MuiButton
                variant="contained"
                color="secondary"
                onClick={handleShowNbaStatsModal}
                className="mx-2"
              >
                More Info
              </MuiButton>
              <MuiButton
                variant="contained"
                color="secondary"
                href="https://natesnbastatsapp.netlify.app/"
                className="demo-btn"
              >
                Live Demo
              </MuiButton>
            </div>
          </Col>
        </Row>
      </div>

      <div className="container">
        <div className="experience-title">
          <h1>Experience</h1>
        </div>

        <details
          className="exp-card"
          data-aos="fade-right"
          style={{
            border: "3px solid black",
            padding: "2rem",
            marginBottom: "2rem",
            boxShadow: "1rem 1rem 2rem black",
            borderRadius: "1rem",
          }}
        >
          <summary style={{ fontWeight: "bold" }}>
            Software Engineer Intern
          </summary>
          <h3>Boosted Biz</h3>
          <h6>June 2023 - Present</h6>
          <p>
            • Utilized the Shopify API to automate the creation of a plethora of
            customized e-commerce websites for diverse clients, reducing the
            development time by 50% as a Software Engineer Intern.
          </p>
        </details>

        <details
          className="exp-card"
          data-aos="fade-right"
          style={{
            border: "3px solid black",
            padding: "2rem",
            marginBottom: "2rem",
            boxShadow: "1rem 1rem 2rem black",
            borderRadius: "1rem",
          }}
        >
          <summary style={{ fontWeight: "bold" }}>Data Analyst</summary>
          <h3>Spartan Analytics Consulting Group</h3>
          <h6>September 2022 - May 2023</h6>
          <p>
            • Demonstrated leadership and analytical skills as an analyst where
            I analyzed data to develop statistical models and provide process
            improvement recommendations to local businesses which increased
            sales by 20%.
          </p>
        </details>
        <details
          className="exp-card"
          data-aos="fade-left"
          style={{
            border: "3px solid black",
            padding: "2rem",
            marginBottom: "2rem",
            boxShadow: "1rem 1rem 2rem black",
            borderRadius: "1rem",
          }}
        >
          <summary style={{ fontWeight: "bold" }}>
            Data Analytics Intern
          </summary>
          <h3>McNaughton-McKay</h3>
          <h6>May 2022 - August 2022</h6>
          <p>
            • Designed, developed, and implemented an innovative application to
            automate the price checking processes, resulting in a 25%
            improvement in time efficiency for the sales team and significant
            increase in pricing accuracy.
          </p>
        </details>
      </div>

      {/* MODALS */}

      <MuiModal
        open={showFitnessModal}
        onClose={handleCloseFitnessModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Adjust width based on screen size
            maxWidth: 800, // Set maximum width for larger screens
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "auto", // Add scrollable behavior
            maxHeight: "80vh", // Set maximum height for the modal content
          }}
        >
          <Row>
            <Col>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                LET'S FIT SWOLE
              </Typography>
            </Col>
            <Col
              className="modal-close-icon"
              onClick={handleCloseFitnessModal}
              xs={1}
            >
              <i className="fa-solid fa-xmark"></i>
            </Col>
          </Row>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Introducing a dynamic MERN fitness app! Created through self-taught
            skills, this app revolutionizes your fitness journey. With a
            user-friendly interface, it empowers individuals to customize
            workouts according to their preferences and fitness goals. The app
            goes beyond individual training, fostering a collaborative community
            where users can connect, motivate, and support each other. By
            categorizing workouts by day, users can easily plan and track their
            progress throughout the week, ensuring a well-rounded fitness
            routine. Developed with passion and dedication, this MERN fitness
            app is poised to make a significant impact on the lives of fitness
            enthusiasts. Stay tuned for its imminent deployment and embark on a
            transformative fitness experience.
          </Typography>

          <MuiButton
            href="https://github.com/Karns11/NewWorkoutApp"
            className="mt-5"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Source Code
          </MuiButton>
        </Box>
      </MuiModal>

      {/* <Modal show={showFitnessModal} onHide={handleCloseFitnessModal}>
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
              href="https://github.com/Karns11/Lets-Fit-Swole"
            >
              Source Code
            </Button>
          </div>
        </Modal.Footer>
      </Modal> */}

      <MuiModal
        open={showProshopModal}
        onClose={handleCloseProshopModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Adjust width based on screen size
            maxWidth: 800, // Set maximum width for larger screens
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "auto", // Add scrollable behavior
            maxHeight: "80vh", // Set maximum height for the modal content
          }}
        >
          <Row>
            <Col>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                PROSHOP ECOMMERCE SITE
              </Typography>
            </Col>
            <Col
              className="modal-close-icon"
              onClick={handleCloseProshopModal}
              xs={1}
            >
              <i className="fa-solid fa-xmark"></i>
            </Col>
          </Row>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Presenting an exceptional MERN-based ProShop eCommerce site,
            meticulously crafted for a valued client. This feature-rich platform
            showcases the seamless integration of the MERN stack, offering a
            comprehensive user experience. Boasting top-notch authentication and
            authorization features, users can securely create accounts, manage
            their profiles, and make purchases with confidence. Additionally,
            the site empowers administrators with exclusive capabilities to
            oversee product inventory, manage orders, and optimize the overall
            shopping experience. The dedication and expertise invested in
            building this ProShop eCommerce site ensures a robust,
            user-friendly, and scalable solution that meets the client's
            business needs. Witness the power of this extraordinary platform
            soon!
          </Typography>

          <MuiButton
            href="https://github.com/Karns11/MERN-app"
            className="mt-5"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Source Code
          </MuiButton>
        </Box>
      </MuiModal>

      {/* <Modal show={showProshopModal} onHide={handleCloseProshopModal}>
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
              href="https://github.com/Karns11/MERN-app"
            >
              Source Code
            </Button>
          </div>
        </Modal.Footer>
      </Modal> */}

      <MuiModal
        open={showNbaStatsModal}
        onClose={handleCloseNbaStatsModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modal-box"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // Adjust width based on screen size
            maxWidth: 800, // Set maximum width for larger screens
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
            overflowY: "auto", // Add scrollable behavior
            maxHeight: "80vh", // Set maximum height for the modal content
          }}
        >
          <Row>
            <Col>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                NBA STATS APP
              </Typography>
            </Col>
            <Col
              className="modal-close-icon"
              onClick={handleCloseNbaStatsModal}
              xs={1}
            >
              <i className="fa-solid fa-xmark"></i>
            </Col>
          </Row>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Introducing an NBA stats application developed with React and
            Bootstrap! This dynamic application leverages the power of the
            balldontlie API to provide users with comprehensive NBA statistics.
            By using Axios, I seamlessly made API requests to retrieve real-time
            data, ensuring up-to-date information. Originally designed with a
            focus on sports betting, this application empowers users to make
            informed decisions. With a sleek and intuitive user interface, users
            can easily navigate through player and team stats, game results, and
            historical data. Stay on top of the game, analyze trends, and gain
            insights to enhance your sports betting strategies with this
            powerful NBA stats application.
          </Typography>

          <MuiButton
            href="https://github.com/Karns11/New-NBA-App"
            className="mt-5"
            variant="contained"
            color="secondary"
            type="submit"
          >
            Source Code
          </MuiButton>
        </Box>
      </MuiModal>

      {/* <Modal show={showNbaStatsModal} onHide={handleCloseNbaStatsModal}>
        <Modal.Header closeButton>
          <Modal.Title>MERN STACK TO-DO APP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Introducing an NBA stats application developed with React and
          Bootstrap! This dynamic application leverages the power of the
          balldontlie API to provide users with comprehensive NBA statistics. By
          using Axios, I seamlessly made API requests to retrieve real-time
          data, ensuring up-to-date information. Originally designed with a
          focus on sports betting, this application empowers users to make
          informed decisions. With a sleek and intuitive user interface, users
          can easily navigate through player and team stats, game results, and
          historical data. Stay on top of the game, analyze trends, and gain
          insights to enhance your sports betting strategies with this powerful
          NBA stats application.
        </Modal.Body>
        <Modal.Footer>
          <div className="modal-buttons">
            <Button
              className="modal-close-button"
              variant="secondary"
              onClick={handleCloseNbaStatsModal}
            >
              Close
            </Button>
            <Button
              className="modal-code-button"
              variant="secondary"
              href="https://github.com/Karns11/New-NBA-App"
            >
              Source Code
            </Button>
          </div>
        </Modal.Footer>
      </Modal> */}
    </section>
  );
};

export default Projects;
