
import React, { useState, useEffect } from "react";
import axios from "axios";

function FunctionCom() {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
     axios
      .get("https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&api-key=qUiJLDJ6GsiheUz4yOJhMpGI7h9FwMAz")
      .then((reviews) => {
       setReviews(reviews.data.results);
       console.log(reviews.data.results);
      })
      .catch((err) => {
       console.log(err);
      });
    }, []);
  return (
    
    <div  style={{marginTop: "5rem"}}>
   {reviews.map((item, index) => {
    return (
      <div  style={{textAlign: "center"}} key={index}>
       <p><strong>Movie Review Summary: </strong><br/>{item.headline}</p>
	   <img alt="myimg" src={item.multimedia?.src}/>
       <p style={{paddingTop: "1rem"}}><strong>Title: </strong>{item.display_title}</p>
       <p><strong>Author: </strong>{item.byline}</p>
                <p><strong>Critics: </strong>{item.critics_pick}</p>
                <hr style={{border: "1px solid 	black",
                marginRight: "15%",marginLeft: "15%", 
                justifyItems: "center", marginBottom: "3rem", 
                marginTop: "2rem"}}/>
       
      </div>
    );
   })}
  </div>
  )
}

export default FunctionCom;