import resObj from "./mockData";
import ReasturentCard from "./RestaurentCard";
import { useState } from "react";
const Body =()=>{
  const [listofRes,setlistofRes]=useState(resObj);
console.log(listofRes);

  
    return(
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filtered=listofRes.filter((item)=>item.info.avgRating > 4.3);
            setlistofRes(filtered);
            console.log(filtered);
            
          
          }}>Top rated Restaurents</button>
        </div>
        <div className="res-container">
        { listofRes.map((restaurent)=>(<ReasturentCard resData={restaurent} />)) }
       </div>
      </div>
    );
    }
  export default Body;