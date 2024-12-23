import "../assets/css/login.css"


function Register() {
    return (
        <section>
            <div class="register">
        <div class="admin-signup all-style">
            <form class="form-signup">
            <label for="myDropdown">Choose an option:</label>
            <select id="myDropdown" name="role">
            <option value="admin">Admin</option>
            </select><br/>
                <label for="firstname">Firstname:</label><br/>
                <input type="text" name="firstname" id="firstname" required/><br/>
                <label for="lastname">Lastname:</label><br/>
                <input type="text" name="lastname" id="lastname" required/><br/>
                <label for="email">Email:</label><br/>
                <input type="text" name="email" id="email" required/><br/>
                <label for="password">Password</label><br/>
                <input type="password" name="password" id="password" required/><br/>
                <label for="photo">Select an profile picture</label><br/>
                <input type="file" id="photo" name="photo" required /><br/>
                <select name="religion" id="options">
                    <option value="Christianity">Christianity</option>
                    <option value="Muslim">Muslim</option>
                </select><br/>
                <div>
                <label for="gender">Gender:</label>
                <input type="checkbox" name="gender" id="gender" value="male"/>
                <label for="male">Male</label>
                <input type="checkbox" name="gender" id="gender" value="female"/>
                <label for="gender">Female</label>
                </div>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    </div>
        </section>
        
    )
}

export default Register;