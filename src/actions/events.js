import { 
  UPDATE_EVENT, 
  ADD_TO_FAVORITES, 
  REMOVE_FROM_FAVORITES,
  SET_FAVORITES
} from "./action-types";

export const updateEvent = event => ({
  type: UPDATE_EVENT,
  payload: {
    event
  }
});

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

export const setFavorites = favorites => ({
  type: SET_FAVORITES,
  payload: {
    favorites
  }
});
