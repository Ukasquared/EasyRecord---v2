import { Link } from "react-router-dom"


const Product = () => {
    
    return (
  <section class="service_section layout_padding">
    <div class="service_container">
      <div class="container ">
        <div class="heading_container heading_center">
          <h2>
            Our <span>Product</span>
          </h2>
          <p>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
          </p>
        </div>
        <div class="row">
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s1.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                Absolutely Free
                </h5>
                <p>It has no limit of usage to all users,<br/> every 
                features within this application is free
                </p>
                <Link to=''> 
                Read More
                </Link>
                 
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s2.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                Easy To Use
                </h5>
                <p>
                designed with infographics to explain grades
                </p>
                <Link to=''> 
                Read More
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s3.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                Enable Parent follow up ward
                </h5>
                <p>
                Parents will be fully informed about the progress of their ward
                </p>
                <Link to=''> 
                Read More
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 ">
            <div class="box ">
              <div class="img-box">
                <img src="images/s3.png" alt="" />
              </div>
              <div class="detail-box">
                <h5>
                Mobile and Desktop Friendly
                </h5>
                <p>
                it can work with all range of devices
                </p>
                <Link to=''> 
                Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-box">
            <Link to=''> 
                View all
            </Link>
        </div>
      </div>
    </div>
  </section>

    )
}

export default Product;