import "./Footer.css"


const Footer = () => {
  return (
    <div className="footerContainer">
        

      <div className="border-bottom py-3 bg-dark ">
        <p className="text-light text-center pt-2">
          {" "}
          DirectManagementServise.com | All Rights Reserved &copy;
          {new Date().getFullYear()}&nbsp;| This Web Site Has Been Made With{" "}
          <i className="fa fa-heart text-danger"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
