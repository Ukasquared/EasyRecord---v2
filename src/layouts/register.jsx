import { useEffect, useState } from "react";
import "../assets/css/login.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faXmark } from '@fortawesome/free-solid-svg-icons'


function Register() {
    const [formData, setformData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        file: null,
        religion: "christianity",
        gender: ""
    })

    const [error, setError] = useState("")
    const [visibility, setVisiblity] = useState(false)


    const handleChange = (e) => {
        const {name, value} = e.target
        setformData((prev) => ({...prev, [name]: value}));
        
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log(`i am ${file}`)
        file && setformData((prev) => ({...prev, "file": file}));
      
    }
    // loop through and append to formdata

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newFormData = new FormData();
        Object.entries(formData).map(([key, value]) => newFormData.append(key, value))
        console.log(newFormData)

        try {
            const response = await fetch("api/signup", {
                method: "POST",
                body: newFormData,
            })

            const data = await response.json();

            if(response.ok) {
                console.log("registered successfully with id " + data.message);

            } else {
                console.log("unsuccessful: " + data.error)
                setError("unsuccessful: " + data.error)
            }

        } catch (error) {
           console.log("error happened: " + error) 
        }

    }

    useEffect(()=>{
        setVisiblity(true)
        const timer = setTimeout(() => {
            setVisiblity((false))
        }, 5000);

        return () => clearTimeout(timer)
    }, [error])

    return (
        <section>
            <div  className={`display ${visibility ? 'show' : ''}`}>
                {error && (<p style={{color: "red"}}>{error}</p>)}
            </div>
            <div className="register">
        <div className="admin-signup all-style">
            <form className="form-signup" onSubmit={handleSubmit}>
            <label htmlFor="myDropdown">Choose an option:</label>
            <select id="myDropdown" name="role">
            <option value="admin">Admin</option>
            </select><br/>
                <label htmlFor="firstname">Firstname:</label><br/>
                <input onChange={handleChange} value={formData.firstname} type="text" name="firstname" id="firstname" required/><br/>
                <label htmlFor="lastname">Lastname:</label><br/>
                <input onChange={handleChange} value={formData.lastname} type="text" name="lastname" id="lastname" required/><br/>
                <label htmlFor="email">Email:</label><br/>
                <input onChange={handleChange} value={formData.email} type="text" name="email" id="email" required/><br/>
                <label htmlFor="password">Password</label><br/>
                <input onChange={handleChange} value={formData.password} type="password" name="password" id="password" required/><br/>
                <label htmlFor="file">Select an profile picture</label><br/>
                <input onChange={handleFileChange} type="file" id="file" name="file" required /><br/>
                <select onChange={handleChange} value={formData.religion} name="religion" id="options">
                    <option value="Christianity">Christianity</option>
                    <option value="Muslim">Muslim</option>
                </select><br/>
                <div>
                <label htmlFor="gender">Gender:&nbsp;&nbsp;&nbsp;</label>
                <input onChange={handleChange} value="male" type="radio" name="gender" id="male"/>
                <label htmlFor="male">male&nbsp;&nbsp;</label>
                <input onChange={handleChange} value="female" type="radio" name="gender" id="female"/>
                <label htmlFor="gender">female</label>
                </div>
                <input type="submit" value="Submit"/>
         </form>
        </div>
    </div>
        </section>
        
    )
}


export default Register;