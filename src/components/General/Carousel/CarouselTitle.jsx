import "./carousel.css";

const CarouselTitle = ({ event }) => {
  if (event === null) {
    return;
  }
  return (
    <div className="carousel-title">
      <span>{event.name}</span>
    </div>
  );
};

export default CarouselTitle;
