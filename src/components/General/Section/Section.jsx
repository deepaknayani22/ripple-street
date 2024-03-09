import "./section.css";
import defaultThumbnail from "../../../assets/default.webp";
import Card from "../Card/Card";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Section({ type }) {
  const [events, setEvents] = useState([]);

  //Use Effect to do an API fetch based on type
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:1234/${type}`);
        const eventData = response.data;
        setEvents(eventData.events);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

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
              key={index} // Use a unique identifier if available, otherwise fallback to index
              thumbnail={ele.heroAsset?.url || { defaultThumbnail }}
              name={ele.name}
            />
          );
        })}
      </div>
    </section>
  );
}
