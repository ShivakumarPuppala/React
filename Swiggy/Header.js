import {Logo_URL} from "./constants";
const Header = ()=>{
    return(
      <div className="header">
        <div className="logo-container">
          <img src={Logo_URL}></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li><a href="">Cart</a></li>
          </ul>
        </div>
      </div>
    );
  };
  export default Header;