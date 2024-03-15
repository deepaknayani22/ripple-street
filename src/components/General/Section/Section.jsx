import "./section.css";
import defaultThumbnail from "../../../assets/default.webp";
import Card from "../Card/Card";
import { useEvents } from "../../../contexts/EventContext";
import { useReducer, useRef, useState, useEffect } from "react";

export default function Section({ type }) {
  const { state } = useEvents();
  const events = state.events[type] || [];
  const eventsPerPage = 4;
  const totalPages = Math.ceil(events.length / eventsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [fadeClass, setFadeClass] = useState("");
  const containerRef = useRef(null);

  const handleNext = (e) => {
    e.preventDefault();
    if (currentPage < totalPages) {
      navigatePage(currentPage + 1);
    }
  };

  const handlePrev = (e) => {
    e.preventDefault();
    if (currentPage > 1) {
      navigatePage(currentPage - 1);
    }
  };

  const currentEvents = events.slice(
    (currentPage - 1) * eventsPerPage,
    currentPage * eventsPerPage
  );

  useEffect(() => {
    setFadeClass("fade-enter");
    const timer = setTimeout(() => setFadeClass(""), 300); //NOTE : Match it with the animation speed in CSS
    return () => clearTimeout(timer);
  }, [currentPage]);

  const navigatePage = (newPage) => {
    setFadeClass("fade-exit");
    setTimeout(() => {
      setCurrentPage(newPage);
    }, 250);
  };

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
    <section className="container" ref={containerRef}>
      <div className="container-header">
        <h3 className="header-tertiary">{getTitle(type)}</h3>
        <div>
          <button
            onClick={(e) => handlePrev(e)}
            disabled={currentPage <= 1}
            style={{
              color: currentPage <= 1 ? "#ccc" : "#fff",
              cursor: currentPage <= 1 ? "not-allowed" : "pointer",
              backgroundColor: currentPage <= 1 ? "transparent" : undefined,
            }}
          >
            Prev
          </button>
          <button
            onClick={(e) => handleNext(e)}
            disabled={currentPage >= totalPages}
            style={{
              color: currentPage >= totalPages ? "#ccc" : "#fff",
              cursor: currentPage >= totalPages ? "not-allowed" : "pointer",
              backgroundColor:
                currentPage >= totalPages ? "transparent" : undefined,
            }}
          >
            Next
          </button>
        </div>
      </div>
      <div className={`card-row ${fadeClass}`}>
        {currentEvents.map((ele, index) => (
          <Card
            key={index}
            thumbnail={ele.heroAsset?.url || defaultThumbnail}
            name={ele.name}
          />
        ))}
      </div>
    </section>
  );
}
