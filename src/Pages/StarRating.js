import { useEffect, useState } from "react";

const stars = ['⭐', '⭐', '⭐', '⭐','⭐'];
const renderStar = (number)=>{
  if(number >= 8 ){
  return stars}
  if(number >= 5 && number < 8){
    return stars.splice(0,4)
  }
  if (number < 3){
    return stars.splice(0, 1)
  }
  if(number < 5){
    return stars.splice(0, 3)
  }

}
export const StarRating = ({vote})=>{
  const[rating, setRating] = useState([])
  const voteInt = parseInt(vote);
useEffect(()=>{
  const showStar = renderStar(voteInt);
  setRating(showStar)
},[voteInt]);
  return(
    
    <div>
      {rating}
      
    </div>

  
  )
}