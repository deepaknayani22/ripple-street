import "./carousel.css";
import "../../../styles/general.css";
import defaultThumbnail from "../../../assets/default.webp";
import { useEffect, useState, useCallback } from "react";
import { IoIosAdd, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";
import axios from "axios";

import CarouselTitle from "./CarouselTitle";

const Carousel = ({ carouselHeroEvent }) => {
  const [heroEvent, setHeroEvent] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(null);

  const NextArrow = useCallback(({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <IoIosArrowForward />
      </div>
    );
  }, []);

  const PrevArrow = useCallback(({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <IoIosArrowBack />
      </div>
    );
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `http://localhost:1234/${carouselHeroEvent}`
        );
        const eventData = response.data;
        setHeroEvent(eventData.events);
        if (eventData.events.length > 0) {
          setCurrentEvent(eventData.events[0]);
          console.log(currentEvent);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageIndex(next);
      setCurrentEvent(heroEvent[next]);
    },
  };

  return (
    <div className="carousel">
      <h2 className="carousel-header">Upcoming Events</h2>
      <Slider {...settings}>
        {heroEvent.map((ele, idx) => {
          return (
            <div
              key={idx}
              className={idx === imageIndex ? "slide active-slide" : "slide"}
            >
              <img
                className="carousel-image"
                src={ele.heroAsset ? ele.heroAsset.url : defaultThumbnail}
                alt="Logo"
              />
            </div>
          );
        })}
      </Slider>
      <CarouselTitle event={currentEvent} />
    </div>
  );
};

export default Carousel;
