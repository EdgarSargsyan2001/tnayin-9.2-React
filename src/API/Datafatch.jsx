import { useEffect, useState } from "react";
import './Datafatch.css'


 function Datafatch({setimg,img}){

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    fetch('https://dog.ceo/api/breeds/list').then(val =>{
      return val.json()
    }).then(response => setPosts(response.message) )   
  },[img])
  
  return(
    
    <select onChange={ async (evt)=>{

      const resp = await fetch(`https://dog.ceo/api/breed/${evt.target.value}/images/random`);
      const json = await resp.json();

      setimg(
        <div >
          <img src={json.message} className="img" alt={evt.target.value}/>
        </div>
      )
      
    }} className="sel">

      {posts.map((post)=> <option value={post} key={post}>{post}</option> )}
    </select>
      
  )

}


export default Datafatch