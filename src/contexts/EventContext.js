import { createContext, useContext, useReducer, useEffect } from "react";
import axios from "axios";

const EventsContext = createContext();

const initialState = {
  events: {
    acceptingApplications: [],
    pastEvents: [],
    experiencingEvents: [],
  },
  isLoading: false,
  error: null,
};

function eventsReducer(state, action) {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, isLoading: true, error: null };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        events: { ...state.events, [action.eventType]: action.payload },
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const EventsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(eventsReducer, initialState);

  const fetchEvents = async (eventType) => {
    dispatch({ type: "FETCH_START" });
    try {
      const response = await axios.get(`http://localhost:1234/${eventType}`);
      const data = response.data;

      dispatch({ type: "FETCH_SUCCESS", payload: data.events, eventType });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE", payload: error.message });
    }
  };

  const value = { state, fetchEvents };
  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};

export const useEvents = () => useContext(EventsContext);
