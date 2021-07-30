import { 
  UPDATE_EVENT, 
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES 
} from "./action-types";

export const updateEvent = event => {
  return {
    type: UPDATE_EVENT,
    payload: {
      event
    }
  };
};

export const addToFavorites = event => ({
  type: ADD_TO_FAVORITES,
  payload: {
    event
  }
});

export const removeFromFavorites = eventId => ({
  type: REMOVE_FROM_FAVORITES,
  payload: {
    eventId
  }
});
