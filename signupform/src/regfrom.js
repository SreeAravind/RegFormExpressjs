import React from "react";
import axios from "axios";
import "./regfrom.css";

import { useState } from "react";
const url = 'http://localhost:8080/register';

function Regform() {
  const [fstname, setfstname] = useState('')
  const [lstname, setlstname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [reguser, setreguser] = useState('')

  function handlesubmit(e) {
    e.preventDefault()
    axios.post(url, {
      _fstname: fstname,
      _lstname: lstname,
      _email: email,
      _password: password
    }).then((res) => {
      setreguser(res.data)
      console.log(res)

    }).catch(err => console.log(err))
  }
  return (
    <>
      <h1 className="head">Registration Form</h1>
      <div className="container">

        <form onSubmit={handlesubmit} className="formcontainer">
          <div >
            <label htmlFor="firstName" className="formlabel">First Name</label><br />
            <input className="forminput" type="text" onChange={(e) => { setfstname(e.target.value) }} placeholder="First Name" />
          </div>
          <div >
            <label className="formlabel" htmlFor="lastName">Last Name </label><br />
            <input type="text" name="" className="forminput" onChange={(e) => { setlstname(e.target.value) }} placeholder="LastName" />
          </div>
          <div >
            <label className="formlabel" htmlFor="email">Email </label><br />
            <input type="email" className="forminput" onChange={(e) => { setemail(e.target.value) }} placeholder="Email" />
          </div>
          <div >
            <label className="formlabel" htmlFor="password">Password </label><br />
            <input className="forminput" type="password" placeholder="Password" />
          </div>
          <div >
            <label className="formlabel" htmlFor="confirmPassword">Confirm Password </label><br />
            <input className="forminput" type="password" onChange={(e) => { setpassword(e.target.value) }} placeholder="Confirm Password" />
          </div>
          <div >
            <button type="submit" className="btn">Register</button>
          </div>

        </form>
      </div>

      <div>
        <h2>Registered User Details</h2>
        <p>First Name :{reguser._fstname}</p>
        <p>Last Name:{reguser._lstname}</p>
        <p>Email:{reguser._email}</p>
        <p>Password:{reguser._password}</p>
      </div>

    </>
  ) 
}
export default Regform