import React, { useState, useEffect } from "react";
import App from "../../App";


const Users = () => {
  const [userdata, setUserdata] = useState([]);

  const fetchUsers = async () => {
    const response = await App.get("/users/");
    setUserdata(response.data);
    console.log(userdata);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      {userdata &&
        userdata.map((el) => {
          return (
            <>
              <h1>{el.user}</h1>
              <div>{el.address}</div>
              <div>{el.professional}</div>
              <div>{el.biography}</div>
              <div>{el.phone_number}</div>
              <div>{el.account_Tybe}</div>
              <img
                style={{ width: "100px", height: "100px" }}
                src={el.img}
                alt={el.user}
              />
            </>
          );
        })}
    </div>
  );
};

export default Users;
