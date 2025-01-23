import client1 from "../assets/images/clients/client1.jpg"
import client2 from "../assets/images/clients/client2.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";



function Customer() {
    // when the button is clicked, it transforms  
  
    const [currentIndex, setcurrentIndex] = useState(0);
    const carouselItem = [
        {
          image: client1, 
          clientname: "LusDen", 
          clientLocation: "magna aliqua. Ut",
          clientFeedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis "},
        { image: client2, 
          clientname: "Zen Cour", 
          clientLocation: "magna aliqua. Ut",
          clientFeedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"},
        {
          image: client1, 
          clientname: "LusDen", 
          clientLocation: "magna aliqua. Ut",
          clientFeedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis "},
        { image: client2, 
          clientname: "Zen Cour", 
          clientLocation: "magna aliqua. Ut",
          clientFeedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"}
        ]
        const totalCarousel = carouselItem.length;
        const prevSlide = () => {
          setcurrentIndex((prevIndex) => (prevIndex - 1) % totalCarousel)
        }
        const nextSlide = () => {
          setcurrentIndex((nextIndex) => (nextIndex + 1) % totalCarousel)
        }



    return (
        <section className="client_section layout_padding">
        <div className="container">
          <div className="heading_container heading_center psudo_white_primary mb_45">
            <h2>
              What says our <span>Customers</span>
            </h2>
          </div>
          <div className="carousel-wrap">
            <div className="over-flow">
              <div className="owl-carousel client_owl-carousel" style={{transform: currentIndex < 3 && `translateX(-${currentIndex * 50}%)`}}>
                {carouselItem.map((value, index) => (
                  <div key={index}  className="item">
                  <div className="box">
                    <div className="img-box">
                      <img src={value.image} alt="" className="box-img" />
                    </div>
                    <div className="detail-box">
                      <div className="client_id">
                        <div className="client_info">
                          <h6>
                            {value.clientname}
                          </h6>
                          <p>
                            {value.clientLocation}
                          </p>
                        </div>
                        <i><FontAwesomeIcon icon={faQuoteLeft} /></i>
                      </div>
                      <p>{value.clientFeedback}</p>
                    </div>
                  </div>
                </div>
                ))}
                
              </div>
            </div>
            
            <div>
              <button onClick={prevSlide} >
              <FontAwesomeIcon className="owl-prev" icon={faAngleLeft} />
              </button>
              <button onClick={nextSlide}>
              <FontAwesomeIcon className="owl-next" icon={faAngleRight} />
              </button>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Customer;