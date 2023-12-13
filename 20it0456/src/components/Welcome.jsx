import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import './Welcome.css';
const Welcome=()=>{
    return(
    <div>
        <div class="Mhead">
            
        <h1>Student Management System</h1>
        </div>
    <div class="main">
        <div class="content">
        <h1>WELCOME!!!</h1>
        <Link to="/login" class="btn">Login</Link><br/>
        <Link to="/register" class="btn">Register</Link> 
          
    </div>
    </div> 
    </div>
    
    )
}
export default Welcome;

//  <Link to="/logout" class="btn">Logout</Link>  