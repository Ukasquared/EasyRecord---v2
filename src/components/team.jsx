import {image1, image2, image3, image4 } from "../assets/images/team/teamimages" 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faSquareXTwitter, faLinkedin, faSquareInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons'

function Team() {
    const allImages = [image1, image2, image3, image4]
    const teamsName = ["Joseph Brown", "Nancy White", 
        "Earl Martinez", "Josephine Allard"]

    return (
        <section class="team_section layout_padding">
            <div class="container-fluid">
            <div class="heading_container heading_center">
                <h2 class="mt-5">
                Our <span> Team</span>
                </h2>
            </div>

            <div class="team_container">
                <div class="row">
                {allImages.map((image, key) => (
                <div class="col-lg-3 col-sm-6">
                    <div class="box ">
                    <div class="img-box">
                        <img key={key} src={image} alt={`${key}`} />    
                    </div>
                    <div class="detail-box">
                        <h5>
                        {teamsName[key]}
                        </h5>
                        <p>
                        Marketing Head
                        </p>
                    </div>
                    <div class="social_box">
                    <Link to="">
                        <FontAwesomeIcon icon={faFacebook} size="1x" />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faSquareXTwitter} size="1x" />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faLinkedin} size="1x" />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faSquareInstagram} size="1x" />
                    </Link>
                    <Link>
                        <FontAwesomeIcon icon={faYoutube} size="1x" />
                    </Link>
                    </div>
                    </div>
                </div>
                 ))}
                </div>
            </div>
            </div>
  </section>
    )
}

export default Team;