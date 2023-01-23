import React from "react";
export default function Alldata(props){



return(


<>
<div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">

 <div className="card" style={{height:"600px"}}>
  <img src={props.image} className="card-img-top img-fluid" alt="..."/>
  <div className="card-body" >
  <h5>{props.date}</h5>
    <h5 className="card-title" style={{height:"100px"}}>{props.title.slice(0,50)+"..."}</h5>
 
    <p className="card-text">{props.author}</p>
    
    <p className="card-text">{props.description}</p>
    


  </div>
    

  </div>

   </div> 
  


  


</>


)



}