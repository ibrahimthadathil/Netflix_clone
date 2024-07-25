import React from "react";
import "./Home.css";
import Navbar from "../../components/NavBar/navbar";
import HeroBann from "../../assets/assets/hero_banner.jpg";
import Hero_title from "../../assets/assets/hero_title.png";
import playicon from "../../assets/assets/play_icon.png";
import infoicon from "../../assets/assets/info_icon.png";
import TitleCards from "../../components/TitleCard/TitleCards";
import Footer from "../../components/Footer/footer";


const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={HeroBann} alt="" className="banner_img" />
        <div className="hero-caption">
          <img src={Hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to secret ancient order , a young n living in
            modern Istanbul embark on a quest to save the city from an immoral
            enemy.
          </p>
          <div className="hero_btn">
            <button className="btn">
              <img src={playicon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoicon} alt="" />
              More info
            </button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={'Popular on Netflix'} category={'popular'}/>
      <TitleCards title={'Top Rated'} category={'top_rated'}/>
      <TitleCards title={'Upcoming'} category={'upcoming'}/>

      </div>
      <Footer/>
    </div>
  );
};

export default Home;
