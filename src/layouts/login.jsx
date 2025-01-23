import "../assets/css/login.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

function Login() {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        email: "", 
        password: ""});

    const handleDataChange = (e) => {
        const {name, value} = e.target
        setformData((prev) => ({...prev, 
            [name]: value}))
    }
  
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
            const data = await response.json()

            if (response.ok) {
                console.log("successfully logged" + data)
                console.log(data.token)
                localStorage.setItem("token", data.token)
                const decodeToken = jwtDecode(data.token)
                console.log(decodeToken)
                console.log(decodeToken.sub)
                let navigation = ""
                if (decodeToken.sub === "admin") {
                    navigation = "/dashboard-admin"
                } else if (decodeToken.sub === "teacher") {
                     navigation = "/dashboard-teacher"
                } else {
                     navigation = "/dashboard-parent"
                }
                navigate(navigation, {replace: true});
            } else {
                console.log("unsuccessful")
            }
        } catch (error) {
            console.log(`an error occurred ${error}`)
        }
    }

    return (
    <section>
        <div className="row login-page">
        <div className="col-12 col-md-6 sign-in">
            <div className="name">
                <form className="form-1" onSubmit={handleSubmit}>
                    <label htmlFor="username">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="email" value={formData.email} onChange={handleDataChange} id="email" required /><br/><br/>
                    <label htmlFor="password">Password &nbsp;&nbsp;</label>
                    <input type="password" name="password" value={formData.password} onChange={handleDataChange} id="password" required /><br/><br/>
                    <input type="submit" value="login"/>
                    <div className="remem">
                        <div className="check-box">
                            <input type="checkbox" name="remind" id="remind" value="remember"/>
                            <label htmlFor="remind">Remember Me</label>
                        </div>
                        <span><Link to="#sign up">forgot password</Link></span>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-12 sign-up col-md-6">
        <h5>Welcome to login</h5>
        <p>Don't have an account yet?</p>
        <Link to="/register">Sign Up</Link>

        </div>
        </div>
  </section>
    )
}

export default Login