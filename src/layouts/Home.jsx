import Hero from "../components/hero";
import Product from "../components/product";
import About from "../components/about";
import WhyUs from "../components/why";
import Team from "../components/team"
import Customer from "../components/customer";
import Footer from "../components/footer"

function Home () {
    return(
        <div>
            <div>
                <Hero />
            </div>
            <div className="mt-5">
                <Product />
            </div>
           <div className="mt-5" >
                <About />
           </div>
           <div className="mt-5">
                <WhyUs />
           </div>
           <div className="mt-5">
                <Team />
           </div>
           <div className="mt-5">
                <Customer />
           </div>
           <div className="mt-5">
                <Footer />
           </div>
        </div>
    )
}

export default Home;