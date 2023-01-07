import { createContext, useReducer } from "react";

const currentDate = new Date()

const INITIAL_STATE = {
  city: undefined,
  date: [{
    endDate: currentDate,
    startDate: currentDate
  }],
  options: {
    adult: 1,
    children: 0,
    room: 1,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload
    case "RESET_SEARCH":
      return INITIAL_STATE
    default:
       return state
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);
  return (
    <SearchContext.Provider
      value={{ city: state.city, date: state.date, options: state.options, dispatch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
