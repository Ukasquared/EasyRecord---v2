import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter, faLinkedin, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


function Footer() {

    return (
      <section>
        <section class="info_section layout_padding2">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_contact">
                <h4>
                  Address
                </h4>
                <div class="contact_link_box">
                  <Link>
                 <i>
                 <FontAwesomeIcon icon={faLocationDot}  />
                 </i>
                    <span>
                      Location
                    </span>
                  </Link>
                  <Link>
                    <i><FontAwesomeIcon icon={faPhone}  /></i>
                    <span>
                      Call +01 1234567890
                    </span>
                  </Link>
                  <Link>
                    <i><FontAwesomeIcon icon={faEnvelope} /></i>
                    <span>
                      demo@gmail.com
                    </span>
                  </Link>
                </div>
              </div>
              <div class="info_social">
                <Link >
                  <FontAwesomeIcon icon={faFacebook} size="1x" />
                </Link>
                <Link >
                  <FontAwesomeIcon icon={faSquareXTwitter} size="1x" />
                </Link>
                <Link >
                  <FontAwesomeIcon icon={faLinkedin} size="1x" />
                </Link>
                <Link >
                  <FontAwesomeIcon icon={faSquareInstagram} size="1x" />
                </Link>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col">
              <div class="info_detail">
                <h4>
                  Info
                </h4>
                <p>
                  necessary, making this the first true generator on the Internet. It uses Link dictionary of over 200 Latin words, combined with Link handful
                </p>
              </div>
            </div>
            <div class="col-md-6 col-lg-2 mx-auto info_col">
              <div class="info_link_box">
                <h4>
                  Links
                </h4>
                <div class="info_links">
                  <Link class="active" >
                    Home
                  </Link>
                  <Link class="" >
                    About
                  </Link>
                  <Link class="">
                    Services
                  </Link>
                  <Link class="">
                    Why Us
                  </Link>
                  <Link class="">
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-3 info_col ">
              <h4>
                Subscribe
              </h4>
              <form action="#">
                <input type="text" placeholder="Enter email" />
                <button type="submit">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> All Rights Reserved By
          <Link href="https://html.design/"> easyrecord</Link>
        </p>
      </div>
    </section>
    </section>
    )
}

export default Footer;