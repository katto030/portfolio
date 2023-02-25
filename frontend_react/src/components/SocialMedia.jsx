import React from "react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a
        href="https://www.linkedin.com/in/katkgao/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.github.com/katto030/"
        target="_blank"
        rel="noreferrer"
      >
        <BsGithub />
      </a>
    </div>
    {/* <div>
      <BsInstagram />
    </div> */}
  </div>
);

export default SocialMedia;
