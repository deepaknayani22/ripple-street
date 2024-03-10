import "./section.css";
import defaultThumbnail from "../../../assets/default.webp";
import Card from "../Card/Card";
import { useEvents } from "../../../contexts/EventContext";

export default function Section({ type }) {
  const { state } = useEvents();
  const events = state.events[type] || [];

  const getTitle = (type) => {
    switch (type) {
      case "experiencingEvents":
        return "Currently Experiencing";
      case "acceptingApplications":
        return "Accepting Applications";
      case "pastEvents":
        return "Past Events";

      default:
        return "Events";
    }
  };

  return (
    <section className="container">
      <h3 className="header-tertiary">{getTitle(type)}</h3>
      <div className="card-row">
        {/* Add a row of all event cards using map after fetching */}
        {events.map((ele, index) => {
          return (
            <Card
              key={index}
              thumbnail={ele.heroAsset?.url || { defaultThumbnail }}
              name={ele.name}
            />
          );
        })}
      </div>
    </section>
  );
}
