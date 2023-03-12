import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import "./Footer.css"

function Footer(){
    return(
        <>
          <p className="footer-text">Coded <FontAwesomeIcon className="footer-icon" icon={faHeart} /> by HaleGokcen</p>
        </>
    )
}

export default Footer