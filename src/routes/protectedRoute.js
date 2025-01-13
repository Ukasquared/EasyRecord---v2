import { Navigate } from "react-router-dom";

const ProtectedLayout = ({children}) => {
    // check if the user session is available i.e if authenticated
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? children : <Navigate to="/login" />
    // return children
} 

export default ProtectedLayout