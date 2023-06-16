import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <footer className="footer">
      <div className="footer-col">
        <h4 className="text-center">Let's Connect!</h4>
        <div className="social-links text-center">
          <a
            data-aos="fade-up"
            href="https://www.facebook.com/profile.php?id=100072880317488"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a data-aos="fade-up" href="https://twitter.com/karnsnathan11">
            <i className="fab fa-twitter"></i>
          </a>
          <a data-aos="fade-up" href="https://www.instagram.com/karnsnathan11/">
            <i className="fab fa-instagram"></i>
          </a>
          <a
            data-aos="fade-up"
            href="https://www.linkedin.com/in/nathan-karns-63820a216/"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            data-aos="fade-up"
            href="https://github.com/Karns11"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
