import {CDN_URL} from "./constants";
import resObj from "./mockData";

const ReasturentCard=(props)=>{
    const {resData}=props;
    console.log(resData);
    // console.log(props.info);
    const {cloudinaryImageId,name,cuisines,avgRating}= resData.info;
    
    
    return(
      <div className="res-card" style={{  backgroundColor:"#f0f0f0"}}>
        <img src={CDN_URL+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating}</h4>
      {/* <h4>{sla.deliveryTime}minutes</h4> */}
      </div>
    );
  };
export default ReasturentCard;  