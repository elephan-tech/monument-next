import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { icon } from "@fortawesome/fontawesome-svg-core";

const socials = [
  {
    name: "facebook",
    url: "https://facebook.com/monument-academy",
    icon: icon(faFacebook),
  },
  {
    name: "twitter",
    url: "https://twitter.com/monument-academy",
    icon: icon(faTwitter),
  },
  {
    name: "instagram",
    url: "https://instagram.com/monument-academy",
    icon: icon(faInstagram),
  },
  {
    name: "linkedin",
    url: "https://linkedin.com/monument-academy",
    icon: icon(faLinkedin),
  },
];
export default socials;
