import Carousel from "../General/Carousel/Carousel";
import Header from "../General/Header/Header";
import Section from "../General/Section/Section";
import { useEvents } from "../../contexts/EventContext";
import { useEffect } from "react";

const HomePage = () => {
  const eventTypes = ["acceptingApplications", "pastEvents"];
  const carouselHeroEvent = "experiencingEvents";

  const { state, fetchEvents } = useEvents();
  useEffect(() => {
    fetchEvents("experiencingEvents");
    fetchEvents("acceptingApplications");
    fetchEvents("pastEvents");
  }, []);

  // return (
  //   <div>
  //     <Header />
  //     <Carousel carouselHeroEvent={carouselHeroEvent} />
  //     <div className="hero-section">
  //       {eventTypes.map((type) => {
  //         return <Section type={type} key={type} />;
  //       })}
  //     </div>
  //   </div>
  // );
  return (
    <div>
      <Carousel type="experiencingEvents" />
      <Section type="acceptingApplications" />
      <Section type="pastEvents" />
    </div>
  );
};

export default HomePage;
