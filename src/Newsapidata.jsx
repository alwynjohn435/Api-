import React, {  useEffect, useState } from "react";
import Alldata from './Alldata'

export default function Newsapidata(props){

const[details,setdetails]=useState([])








async function getDetails(){

    var rawdata=await fetch(`https://newsapi.org/v2/everything?q=${props.category}&apiKey=eec8dcb2875a4aba87463dc0fc7847a9`)
    
    var data=await rawdata.json()
    
    setdetails(data.articles)

    
    }
    
    useEffect(
        ()=>{getDetails()},[props.category]
        )
    


return(

    <>
    
    <h1 className="back2 mt-5 text-center mb-3 bg-secondary">AllData</h1>
    <div className='container'>
    <div className='row'>
    
    {
        details.map((item,index)=>{
    return <Alldata
        title={item.title}
    author={item.author}
    image={item.urlToImage}
    date={item.publishedAt}
    description={item.description}
    />
    
        })
    }
    

</div>
</div>

</>




)






}

