import { Modal } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import { useState, useRef } from "react";
const emailjs = window.emailjs;

function App() {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleCloseEmailModal = () => setShowEmailModal(false);
  const handleShowEmailModal = () => setShowEmailModal(true);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_965e8b9",
        "template_r4ybnou",
        form.current,
        "o-y_5neqNasZHuGbk"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Header />
      <main className="main">
        <Projects />
      </main>
      <Footer />
      {showEmailModal && (
        <Modal show={showEmailModal} onHide={handleCloseEmailModal}>
          <div className="email-Modal-container d-flex align-items-center justify-content-center bg-light p-3 text-center">
            <div className="w-50">
              <div className="text-light">
                <h3 className="fw-bold text-dark">Say Hello!</h3>
              </div>
              <i
                onClick={handleCloseEmailModal}
                className="ex fa-solid fa-x"
              ></i>

              <form ref={form} onSubmit={sendEmail}>
                <div className="form-floating mb-3 contact-input">
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                </div>

                <div className="form-floating mb-3 contact-input">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>

                <div className="form-floating mb-3 contact-input">
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="form-control"
                    placeholder="Enter Subject"
                  />
                  <label>Subject</label>
                </div>

                <div className="form-floating mb-3 contact-input">
                  <textarea
                    id="message"
                    className="textarea form-control"
                    placeholder="Enter Message"
                    name="message"
                    style={{ height: "175px" }}
                  />
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                </div>

                <button className="btn btn-warning" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>

          <div className="row pt-5 text-center">
            <div className="col">
              <a href="https://twitter.com/karnsnathan11" className="btn ml-3">
                <i className="fab fa-twitter text-light icon"></i>
              </a>
            </div>
            <div className="col">
              <a href="https://github.com/karns11" className="btn ml-3">
                <i className="fab fa-github text-light icon"></i>
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.linkedin.com/in/nathan-karns-63820a216/"
                className="btn ml-3"
              >
                <i className="fab fa-linkedin text-light icon"></i>
              </a>
            </div>
            <div className="col">
              <a
                href="https://instagram.com/karnsnathan11"
                className="btn ml-3"
              >
                <i className="fab fa-instagram text-light icon"></i>
              </a>
            </div>
          </div>
        </Modal>
      )}
      <button
        style={{ position: "fixed", bottom: "20px", right: "20px" }}
        onClick={handleShowEmailModal}
        className="circle-button mb-4"
      >
        Say Hi!
        <i className="fa-solid fa-pen-to-square pt-2"></i>
      </button>
    </>
  );
}

export default App;
