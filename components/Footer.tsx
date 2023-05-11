import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import styles from '../styles/Home.module.css'
library.add(faGithub, faLinkedin, faEnvelope);

export default function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rpet064"><FontAwesomeIcon className={styles.footericon} icon={faGithub} title="Github"/></a>
        <a href="www.linkedin.com/in/robert-pether-ba9968113"><FontAwesomeIcon className={styles.footericon} icon={faLinkedin} title="Linkedin"/></a>
        <a href="mailto:rpether@hotmail.co.nz"><FontAwesomeIcon className={styles.footericon} icon={faEnvelope} title="Email"/></a>
      </div>
      <p>Created by robertpether.digital {new Date().getFullYear()}</p>
    </footer>
  );
}
