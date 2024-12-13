import client1 from "../assets/images/clients/client1.jpg"
import client2 from "../assets/images/clients/client2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";


function Customer() {
    // when the button is clicked, it transforms  
    // the 


    return (
        <section class="client_section layout_padding">
        <div class="container">
          <div class="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div class="carousel-wrap ">
            <div class="owl-carousel client_owl-carousel">
              <div class="item">
                
                <div class="box">
                  <div class="img-box">
                    <img src={client1} alt="" class="box-img" />
                  </div>
                  <div class="detail-box">
                    <div class="client_id">
                      <div class="client_info">
                        <h6>
                          LusDen
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src={client2} alt="" class="box-img" />
                  </div>
                  <div class="detail-box">
                    <div class="client_id">
                      <div class="client_info">
                        <h6>
                          Zen Court
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i ><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src={client1} alt="" class="box-img" />
                  </div>
                  <div class="detail-box">
                    <div class="client_id">
                      <div class="client_info">
                        <h6>
                          LusDen
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i ><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="box">
                  <div class="img-box">
                    <img src={client2} alt="" class="box-img" />
                  </div>
                  <div class="detail-box">
                    <div class="client_id">
                      <div class="client_info">
                        <h6>
                          Zen Court
                        </h6>
                        <p>
                          magna aliqua. Ut
                        </p>
                      </div>
                      <i><FontAwesomeIcon icon={faQuoteLeft} /></i>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Customer;