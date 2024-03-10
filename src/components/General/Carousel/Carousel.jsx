import "./carousel.css";
import "../../../styles/general.css";
import defaultThumbnail from "../../../assets/default.webp";
import { useEffect, useState, useCallback } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Slider from "react-slick";

import CarouselTitle from "./CarouselTitle";
import { useEvents } from "../../../contexts/EventContext";

const Carousel = ({ type }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [currentEvent, setCurrentEvent] = useState(null);

  const { state } = useEvents();
  const events = state.events[type] || [];

  useEffect(() => {
    if (events.length > 0) {
      setCurrentEvent(events[0]);
    }
  }, [events]);

  console.log(events);

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
      setCurrentEvent(events[next]);
    },
  };

  return (
    <div className="carousel">
      <h2 className="carousel-header">Experiencing Events</h2>
      <Slider {...settings}>
        {events.map((ele, idx) => {
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
