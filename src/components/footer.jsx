import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter, faLinkedin, faSquareInstagram} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";


function Footer() {

    return (
      <section>
        <section className="info_section layout_padding2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_contact">
                <h4>
                  Address
                </h4>
                <div className="contact_link_box">
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
              <div className="info_social">
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
            <div className="col-md-6 col-lg-3 info_col">
              <div className="info_detail">
                <h4>
                  Info
                </h4>
                <p>
                  necessary, making this the first true generator on the Internet. It uses Link dictionary of over 200 Latin words, combined with Link handful
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 mx-auto info_col">
              <div className="info_link_box">
                <h4>
                  Links
                </h4>
                <div className="info_links">
                  <Link className="active" >
                    Home
                  </Link>
                  <Link className="" >
                    About
                  </Link>
                  <Link className="">
                    Services
                  </Link>
                  <Link className="">
                    Why Us
                  </Link>
                  <Link className="">
                    Team
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 info_col ">
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
      <section className="footer_section">
      <div className="container">
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