import './teacher.css';
import { useState, useEffect } from "react";
import axios from "axios";


function TeacherProfile() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.post("http://localhost/WEBREACT/20it0456/backend/profile.php", {
            role: localStorage.getItem('Role'),
            nic: localStorage.getItem('Nic')
        }).then(function (response) {
            setdata(response.data);
            // console.log(response.data);
        }).catch(function (response) {
            alert("Something went wrong");
        });

        
    }, []);
    return(

<div class="container1 mt-4 mb-4 p-3 d-flex justify-content-center"> 
     <div class="card p-4">
         <div class=" image d-flex flex-column justify-content-center align-items-center"> 
             <button class="btn2 btn-secondary">
                 <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" />
             </button> 
             <span class="name mt-3">{data.fname} {data.lname}<br/> </span>
             <span class="idd"> {data.role} </span>
                 
             <div class="d-flex flex-row justify-content-center align-items-center gap-2">  
                     <span class="idd1">NIC :</span>   <span className="ml-2">{data.nic}</span> 
             </div> 
             <div class="d-flex flex-row justify-content-center align-items-center gap-2">  
                     <span class="idd1">First Name :</span>  <span className="ml-2">{data.fname}</span>
             </div>
             <div class="d-flex flex-row justify-content-center align-items-center gap-2">  
                    <span class="idd1">Last Name :</span>  <span className="ml-2">{data.lname}</span> 
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">  
                    <span class="idd1">E-mail : </span>   <span className="ml-2">{data.email}</span> 
            </div>
            <div class="d-flex flex-row justify-content-center align-items-center gap-2">                                              
                     <span class="idd1">Phone Number :</span>   <span className="ml-2">{data.mobile}</span> 
            </div>

                <div class=" d-flex mt-2">
                <button class="btn1 btn-dark">Edit Profile</button> 
                </div> 
            </div>
          </div>
     </div>
    );
}

export default TeacherProfile;