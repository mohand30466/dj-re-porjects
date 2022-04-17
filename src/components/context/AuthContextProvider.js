
import React, { useContext, useState } from "react";
import { createContext } from "react";

const Glopaldata = createContext(null);

export const DataProvider =({user, children})=> {

  const [db, setdate] = useState(user);
  const SetUser = currentUser =>{
    if (currentUser) {
      localStorage.setItem("mykey",currentUser)
      
    }
    else localStorage.removeItem("mykey")

    setdate(currentUser)

  }

  return (
    <div>
      <Glopaldata.Provider value={{ db, SetUser }}>
        { children }
      </Glopaldata.Provider>
    </div>
  );
}

export const useData = () => useContext(Glopaldata);
