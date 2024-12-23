import "../assets/css/login.css"

function Login() {
    return (
    <section>
        <div className="row login-page">
        <div className="col-12 col-md-6 sign-in">
            <div className="name">
                <form className="form-1">
                    <label for="username">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <input type="text" name="email" id="email" required /><br/><br/>
                    <label for="password">Password &nbsp;&nbsp;</label>
                    <input type="password" name="password" id="password" required /><br/><br/>
                    <input type="submit" value="login"/>
                    <div className="remem">
                        <div className="check-box">
                            <input type="checkbox" name="remind" id="remind" value="remember"/>
                            <label for="remind">Remember Me</label>
                        </div>
                        <span><a href="#sign up">forgot password</a></span>
                    </div>
                </form>
            </div>
        </div>
        <div className="col-12 sign-up col-md-6">
        <h5>Welcome to login</h5>
        <p>Don't have an account yet?</p>
        <a href="signup.html">Sign Up</a>

        </div>
        </div>
  </section>
    )
}

export default Login