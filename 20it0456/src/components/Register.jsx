import axios from 'axios';
import { useState } from 'react';
import './Register.css';

export const Register = (props) => {
  //let history = useNavigate();
  const [data,setData] = useState({
    fname:"",
    lname:"",
    stuid:"",
    role:"",
    nic:"",
    email:"",
    mobile:"",
    password:"",

  })


  const handleChange=(e)=>{
    setData({...data, [e.target.name]: e.target.value});
  }

  const submitForm=(e)=>{
    e.preventDefault();
    const sendData = {
      fname:data.fname,
      lname:data.lname,
      stuid:data.stuid,
      role:data.role,
      nic:data.nic,
      email:data.email,
      mobile:data.mobile,
      password:data.password,
    }

      axios.post("http://localhost/WEBREACT/20IT0456/backend/register.php",sendData).then((result)=>{
        if(result.data.status === 'Invalid') {
          alert('Invalid User');
        } else {
         alert('Successful!');
        }
      })
    
  }
  return (

        <div class="reg">
        <div class="heading text-center"> <h1>Registration</h1> </div>
          <form onSubmit={submitForm}>
          <div class="card-details">
              <div class="card-box">
                    <span class="details" for="firstName"> First Name </span>
                    <input type="text" id="fname" name="fname" placeholder="Enter Your First Name"
                    onChange={handleChange} value={data.fname}/>
              </div>
              <div class="card-box">
                    <span class="details" for="lastName"> Last Name </span>
                    <input type="text" name="lname" placeholder="Enter Your Last Name" id="lname"
                    onChange={handleChange} value={data.lname}/>
                </div>
                <div class="card-box">
                    <span class="details" for="studentId"> Student Id </span>
                    <input type="text" name="stuid" placeholder="Enter Your Student Id" id="stuid"
                    onChange={handleChange} value={data.stuid}/>
                </div>
                <div class="card-box">
                    <span class="details" for="NIC"> NIC </span>
                    <input type="text" name="nic" placeholder="Enter Your NIC"  id="nic"
                    onChange={handleChange} value={data.nic} />
                </div>
                <div class="card-box">
                    <span class="details" for="Email"> Email </span>
                    <input type="email" name="email" placeholder="Enter Your Email" id="email"
                    onChange={handleChange} value={data.email}/>
                </div>
                <div class="card-box">
                    <span class="details" for="MobileNumber"> Mobile Number </span>
                    <input type="text" name="mobile" placeholder="Enter Your Telephone Number" id="mobile"
                    onChange={handleChange} value={data.mobile}/>
                </div>
              
                <div class="card-box">
                    <span class="details" for="Password"> Password </span>
                    <input type="Password" name="password" placeholder="Enter Password" id="password"
                    onChange={handleChange} value={data.password} />
                </div>
                <div class="bttn">
                    <span class="details" for="jobType"> Job Role </span><br/>
                <div class="circle">
                    <input type="radio" name="role" id= "role" onChange={handleChange} value="student" />Student
                    <input type="radio" name="role" id="role" onChange={handleChange} value="teacher" />Teacher
                </div>
                </div>           
            </div> 
                <div class="button">
                    <input type="submit" value="Register" name="submit"/>
                </div>  
          </form>
          </div>     
    
    )
}
export default Register;