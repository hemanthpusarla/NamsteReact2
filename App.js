import React from "react";
import ReactDOM from "react-dom/client";

// Define the Title component
/**
 * Header
 * -logo 
 * -nav items
 * 
 * body
 * -search 
 * - Resto container insode 
 * - resto cards
 * Footer
 * - copy right links
 * contact info 
 * - address
 */
const Header = () =>{
  return(
    <div className="header">
      <div className="logo-container">
     
        <img  className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdaMYtVi9_tfNcpsbGGseU6ehYgV9UeU3h7A&s" / >
      </div>
      <div className="nav-items">
        <ul>
          <li>Home </li>
          <li>about </li>
          <li>contact us</li>
          <li>locations</li>
          <li> cart</li>
        </ul>
      </div>
    </div>
  )

};

const styleCard = {
  backgroundcolor: "#f0f0f0",
};

const RestoCard = (props) =>{
  console.log(props)
  return (
    <div className="res-card" style={styleCard}>

      <img className="res-logoImg" alt="res logo " src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/46463436B.png" />
      <h3> {props.resName} </h3>
      <h4>{props.cusine}</h4>
      <h4>4.4 stars🚀</h4>
      <h4>69 minutes</h4>
    </div>
  )
}
const Body = () =>{
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="rest_container">
        
        <RestoCard resName = "meghanafoods" cusine= "biryani" / >
        <RestoCard resName = "BurgerKing" cusine= "Burger" / >

        
      </div>
    </div>
  )
}
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Body/>
    </div>

  )
}
const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)