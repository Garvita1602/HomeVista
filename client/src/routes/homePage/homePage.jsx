import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import { AuthContext } from "../../context/AuthContext";
import "./homePage.scss";

function HomePage() {

  const {currentUser} = useContext(AuthContext)

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Discover Your Perfect Home with HomeVista</h1>
          <p className="xyz">
            Welcome to HomeVista, your ultimate destination for finding the perfect home.
            At HomeVista, we understand that a home is more than just a place to live; it is where life happens.
            Discover your dream home with HomeVista, where finding the perfect home is just a click away.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>12+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>5</h1>
              <h2>Award Gained</h2>
            </div>
            <div className="box">
              <h1>20000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
