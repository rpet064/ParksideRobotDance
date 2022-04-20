import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faGithub, faLinkedin, faAddressCard, faEnvelope);

export default function Footer() {
  return (
    <footer>
      <div>
        <FontAwesomeIcon className="footer-icon" icon={["fab", "github"]} />
        <FontAwesomeIcon className="footer-icon" icon={["fab", "linkedin"]} />
        <FontAwesomeIcon className="footer-icon" icon={["fas", "envelope"]} />
      </div>
      <p>Copyright Robert Pether {new Date().getFullYear()}</p>
    </footer>
  );
}
