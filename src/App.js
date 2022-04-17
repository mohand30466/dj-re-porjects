import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import Emailconfirmation from "./components/auth/Emailconfirmation";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import About from "./components/users/About";
import Account from "./components/users/Account";
import Contact from "./components/users/Contact";
import Userprofile from "./components/users/Userprofile";
import Users from "./components/users/Users";
import Header from "./components/pages/Header";
import Banners from "./components/pages/Banners";
import Footer from "./components/pages/Footer";
import { DataProvider } from "./components/context/AuthContextProvider";

function App() {
  let key;
  return (
    <>
      <DataProvider user={key}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="" element={<Banners />} />{" "}
            <Route path="about" element={<About />} />{" "}
            <Route path="contact" element={<Contact />} />{" "}
            <Route path="signIn" element={<SignIn />} />{" "}
            <Route path="SignUp" element={<SignUp />} />{" "}
            <Route path="users" element={<Users />} />{" "}
            <Route path="account" element={<Account />} />{" "}
            <Route path="profile" element={<Userprofile />} />
            <Route
              path="accounts/confirm-email/:key"
              element={<Emailconfirmation />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </DataProvider>
    </>
  );
}

export default App;
