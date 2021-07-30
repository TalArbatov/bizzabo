import { 
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES, 
  UPDATE_EVENT
} from "../actions/action-types";

const defaultState = {
  selectedEvent: {},
  favorites: []
};

const eventsReducer = (state = defaultState, action) => {
  switch(action.type) {
    
    // TODO: validate deep nesting (via lodash get or .?)
    case UPDATE_EVENT:
      console.log('selectedEvent', action.payload.event);
      return {
        ...state,
        selectedEvent: action.payload.event
      }
    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [action.payload.event, ...state.favorites]
      }  
    case REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(event => event.id !== action.payload.eventId)
      }  
    default:
      return state;
  }
};

export default eventsReducer;
