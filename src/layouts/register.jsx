import { useState } from "react";
import "../assets/css/login.css"


function Register() {
    const [formData, setformData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        photo: "",
        religion: "christianity",
        gender: ""
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        if (name === "photo") {
            const file = value.files[0];
            file && setformData((prev) => ({...prev, [name]: file}));
        }
        setformData((prev) => ({...prev, [name]: value}));  
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json();

            if(response.ok) {
                console.log("registered successfully " + data);
            } else {
                console.log("unsuccessful" + data)
            }

        } catch (error) {
           console.log("error happened: " + error) 
        }

    }

    return (
        <section>
            <div class="register">
        <div class="admin-signup all-style">
            <form class="form-signup" onSubmit={handleSubmit}>
            <label for="myDropdown">Choose an option:</label>
            <select id="myDropdown" name="role">
            <option value="admin">Admin</option>
            </select><br/>
                <label for="firstname">Firstname:</label><br/>
                <input onChange={handleChange} value={formData.firstname} type="text" name="firstname" id="firstname" required/><br/>
                <label for="lastname">Lastname:</label><br/>
                <input onChange={handleChange} value={formData.lastname} type="text" name="lastname" id="lastname" required/><br/>
                <label for="email">Email:</label><br/>
                <input onChange={handleChange} value={formData.email} type="text" name="email" id="email" required/><br/>
                <label for="password">Password</label><br/>
                <input onChange={handleChange} value={formData.password} type="password" name="password" id="password" required/><br/>
                <label for="photo">Select an profile picture</label><br/>
                <input onChange={handleChange} value={formData.photo} type="file" id="photo" name="photo" required /><br/>
                <select onChange={handleChange} value={formData.religion} name="religion" id="options">
                    <option value="Christianity">Christianity</option>
                    <option value="Muslim">Muslim</option>
                </select><br/>
                <div>
                <label for="gender">Gender:&nbsp;&nbsp;&nbsp;</label>
                <input onChange={handleChange} value={formData.gender} type="radio" name="gender" id="male"/>
                <label for="male">male&nbsp;&nbsp;</label>
                <input onChange={handleChange} value={formData.gender} type="radio" name="gender" id="female"/>
                <label for="gender">female</label>
                </div>
                <input type="submit" value="Submit"/>
         </form>
        </div>
    </div>
        </section>
        
    )
}


export default Register;