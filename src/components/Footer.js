import React, { useEffect } from "react";
import { Row } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <footer class="footer">
      <div class="footer-container">
        <Row>
          <div class="footer-col">
            <h4 className="text-center">Let's Connect!</h4>
            <div class="social-links text-center">
              <a
                data-aos="fade-up"
                href="https://www.facebook.com/profile.php?id=100072880317488"
              >
                <i class="fab fa-facebook-f"></i>
              </a>
              <a data-aos="fade-up" href="https://twitter.com/karnsnathan11">
                <i class="fab fa-twitter"></i>
              </a>
              <a
                data-aos="fade-up"
                href="https://www.instagram.com/karnsnathan11/"
              >
                <i class="fab fa-instagram"></i>
              </a>
              <a
                data-aos="fade-up"
                href="https://www.linkedin.com/in/nathan-karns-63820a216/"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
