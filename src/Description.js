import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';


function Description({movies}) {
  const params = useParams();
  var x=movies.filter((el)=>el.title==params.description);
  const navigate=useNavigate();

  
return (
  <div>
      <h1>{x[0].title}</h1>
      <h1>{x[0].description}</h1>
      <iframe width="560" height="315" src={x[0].Trailers} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>      <button onClick={()=>navigate('/')}>Home</button>
  </div>
)
}

export default Description