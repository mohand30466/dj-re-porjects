import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Partners from "./Partners";
const Banners = () => {
 
  const msgstyle = {
    width: "40vw",
  };
  return (
    <>  
    <div className="HomeContainer">
      <div className="sectioin">
        <div className="homeRight">
          <h1 className="stitle">DIRECT LTD</h1>
          <h3 className="stitle">JOB PLACEMENT SERVICES</h3>
          <div style={msgstyle}>
            <p>
              The best site ever provide flexaple work in different enviroment,
              fear enough salary with all social right manage your work as you
              like get worked we are here for your 24/7, with us you will feel
              the familly
              <p>We are the best...</p>
            </p>
            <Button className=" me-3 bg-gray ">
              {" "}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                className="text-primery"
                to="/signup"
              >
                Join us to get served
              </Link>
            </Button>
          </div>
        </div>
        <div className="homeleft"></div>
      </div>
     
    
    </div>
    <Partners/></>
  );
};

export default Banners;
