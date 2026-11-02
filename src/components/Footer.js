import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faGoogle
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <>
      <div
        id="socials"
        style={{
          display: "flex",
          borderTop: "1px solid #ededed",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 30,
          marginTop: 60,
          width: "100%",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px"
        }}
      >
        <div>
          <h1 style={{ textAlign: "left", width: "auto", margin: 0, fontSize: "1.8rem" }}>
            Vishal Rao M <strong style={{ color: "red" }}>.</strong>
          </h1>
          <p style={{ margin: "4px 0 0 0", color: "#64748b", fontSize: "0.95rem" }}>
            iOS Developer &amp; Technical Engineer · B.Tech AI &amp; DS · Chennai, Tamil Nadu
          </p>
          <div style={{ marginTop: 8, display: "flex", gap: "16px", flexWrap: "wrap", fontSize: "0.9rem" }}>
            <a href="mailto:vishalrao5432@gmail.com" style={{ color: "#006AFF", textDecoration: "underline" }}>
              vishalrao5432@gmail.com
            </a>
            <span>·</span>
            <a href="tel:+916382190388" style={{ color: "#006AFF" }}>
              +91 63821 90388
            </a>
            <span>·</span>
            <a href="./Vishal_Rao_UDI.pdf" target="_blank" rel="noopener noreferrer" style={{ color: "#006AFF", fontWeight: "bold" }}>
              Download Resume ↗
            </a>
          </div>
          <span style={{ fontSize: "150%" }} className="specialtext">
            <p
              style={{ textAlign: "left", color: "red", marginTop: 10 }}
              className="cartoonText cartoonText2"
            >
              Until Next Time :p
            </p>
          </span>
        </div>

        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <p
            className="lastText"
            style={{
              margin: 0,
              width: "auto",
              fontWeight: "bolder",
              opacity: 0.5,
              fontSize: "0.9rem"
            }}
          >
            Designed &amp; Developed for Vishal Rao M © 2026
          </p>
        </div>
      </div>

      <div
        className="socialLinks"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          marginLeft: "auto",
          paddingBottom: 40,
          paddingTop: 10,
          paddingRight: 20,
          gap: "10px"
        }}
      >
        <a
          className="headernav"
          href="https://linkedin.com/in/vishal-rao-173a232b9"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          className="headernav"
          href="https://github.com/vishal-rao28"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a
          className="headernav"
          href="mailto:vishalrao5432@gmail.com"
          title="Email"
        >
          <FontAwesomeIcon icon={faGoogle} size="2x" />
        </a>
      </div>

      <span
        style={{ display: "none", fontSize: "150%" }}
        className="specialtext2"
      >
        <span
          style={{ textAlign: "left", color: "red" }}
          className="cartoonText"
        >
          Until Next Time :p
        </span>
      </span>
    </>
  );
}

export default Footer;
