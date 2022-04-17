import React from 'react';

function Partners(props) {
    
const images = [
    require("../../images/blog-post-1.jpeg").default,
    require("../../images/blog-post-2.jpg").default,
    require("../../images/blog-post-3.jpeg").default,
    require("../../images/blog-post-4.jpeg").default,
  ];
  
  let card = {
    width: "24.9%",
    height: "19rem",
    border: "1px rgb(159, 166, 200 solid",
    borderRadius: "2px",
    boxShadow: "3px 3px 3px #9E9E9E",
    marginBottom: "3px",
  };
  const info = [
    {
      title: "Mackdonald Resturant",
      dis: "the best site ever providing fast food",
    },
    {
      title: "Aroma",
      dis: "The Best Cafe in The city providin special cafe",
    },
    {
      title: "Sevevn Hole",
      dis: "the best weading hole to celaprate ",
    },
    {
      title: "Madrone",
      dis: "Come to have fun time with us in the best place ever ",
    },
  ];
  
    return (
      <>
      <h1 style={{textAlign:"center"}}>Some of our amazing partner</h1>
        <div
          className="galary"
          style={{
            display: "flex",
            flexBasis: "23%",
            justifyContent: "space-between",
          }}
        >
          {images.map(function (imgSrc, i) {
            return (
              <div key={i} style={card}>
                <img style={{ width: "100%" }} key={i} src={imgSrc} alt={i} />
                <p style={{ fontSize: "18px" }}> {info[i].title}</p>
                <p style={{ fontSize: "14px" }}> {info[i].dis} <span style={{color:"blue"}}> Read More ...</span></p>
                
              </div>
            );
          })}
        </div>
        </>
    )
  
}

export default Partners;