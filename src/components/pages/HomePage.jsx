import Carousel from "../General/Carousel/Carousel";
import Header from "../General/Header/Header";
import Section from "../General/Section/Section";

const HomePage = () => {
  const eventTypes = ["acceptingApplications", "pastEvents"];
  const carouselHeroEvent = "experiencingEvents";

  return (
    <div>
      <Header />
      <Carousel carouselHeroEvent={carouselHeroEvent} />
      <div className="hero-section">
        {eventTypes.map((type) => {
          return <Section type={type} key={type} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
