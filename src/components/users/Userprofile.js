import React, { useState } from "react";
import { Api } from "../api/Api";

export default function Userprofile() {
 
  /////////////////////////////////////////////
  const [user, setUser] = useState("");
  const [professional, setProffisional] = useState("");
  const [biography, setbiography] = useState("");
  const [address, setaddress] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [img, setImg] = useState("");
  const [accounttype, setAccounttype] = useState("");
  const [businessid, setBusinessid] = useState("");
  const [data, setData] = useState([]);

  
  const CreateUserProfile = (e) => {
    e.preventDefault();
    Api.UpdateUserProfile({
      user: user.username,
      professional,
      biography,
      address,
      phonenumber,
      accounttype,
      businessid,
    })
      .then((res) => {
        setData(res);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };



  return (
  
      <form onSubmit={CreateUserProfile} className=" col-sm-5 cont ">
        <div
          id="emailHelp"
          className="form-text text-center text-primary"
        ></div>
        <div id="emailHelp" className="form-text ">
          <p>Complete your profile</p>
        </div>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            className="form-control"
            placeholder=" Username"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setProffisional(e.target.value)}
            value={professional}
            className="form-control"
            placeholder="Profisional"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setbiography(e.target.value)}
            value={biography}
            className="form-control"
            placeholder="Biography"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setaddress(e.target.value)}
            value={address}
            className="form-control"
            placeholder="Address"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setPhonenumber(e.target.value)}
            value={phonenumber}
            className="form-control"
            placeholder="Phone number"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Avatar
          </label>
          <input
            type="file"
            onChange={(e) => setImg(e.target.value)}
            value={img}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3">
         
          <div>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Choose Account type
            </label>
          </div>

          <input
            style={{ width: "20px", height: "20px" }}
            type="checkbox"
            onChange={(e) => setAccounttype(e.target.value)}
            value="employee"
          />
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
            style={{ marginLeft: "20px", fontSize: "12px" }}
          >
            Employee
          </label>
          <input
            style={{ width: "20px", height: "20px", marginLeft: "50px" }}
            type="checkbox"
            onChange={(e) => setAccounttype(e.target.value)}
            value="employer"
          />
          <label
            htmlFor="exampleInputPassword1"
            className="form-label"
            style={{ marginLeft: "20px", fontSize: "12px" }}
          >
            Employer
          </label>
        </div>
        <div className="mb-3">
          <input
            type="text"
            onChange={(e) => setBusinessid(e.target.value)}
            value={businessid}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Business id"
          />
        </div>

        <div className="d-grid gap-2">
          <button
            className="btn-lg"
            type="submit"
            onClick={CreateUserProfile}
            
          >
            submit
          </button>
        </div>
      </form>
   
    // </div>
  );
}
