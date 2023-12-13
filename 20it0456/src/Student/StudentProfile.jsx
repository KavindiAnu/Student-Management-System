import './student.css';
import { useState, useEffect } from "react";
import axios from "axios";


function StudentProfile() {
    const [data, setdata] = useState([]);
    useEffect(() => {
        axios.post("http://localhost/WEBREACT/20IT0456/backend/profile.php", {
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
<div className="a">
    <section className="b">
                <div className="c">
                    <div >
                        <div className="d">
                        <center> <img src="https://thumbs.dreamstime.com/b/student-icon-vector-graduation-mortar-board-school-college-university-glyph-pictogram-male-person-profile-avatar-108392101.jpg" alt="..." width='300' /></center> 
                            </div><br/>
                            <div className="e">
                                <div className="f">
                                <h3 className="uname text-center">{data.fname} {data.lname}</h3>
                                <center><span className=" h4">{data.role}</span></center>
                                </div>
                                <div className="udetails">
                                <ul className="  list-unstyled text-center" >
                                    <li className=""><span className="">Role :</span>  <span className="ml-2">{data.role}</span> </li>
                                    <li className=""><span className="">NIC :</span>   <span className="ml-2">{data.nic}</span> </li>
                                    <li className=""><span className="">First Name :</span>  <span className="ml-2">{data.fname}</span> </li>
                                    <li className=""><span className="">Last Name :</span>  <span className="ml-2">{data.lname}</span> </li>
                                    <li className=""><span className="">E-mail : </span>   <span className="ml-2">{data.email}</span> </li>
                                    <li className=""><span className="">Phone Number :</span>   <span className="ml-2">{data.mobile}</span> </li>
                                    <li className=""><span className="">Student ID :</span>    <span className="ml-2">{data.stuid}</span> </li>
                                </ul>
                                </div>
                        </div>


                    </div>
                </div>
            </section>
        </div>
    );
}

export default StudentProfile;