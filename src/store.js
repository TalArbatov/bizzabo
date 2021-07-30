import { createStore, combineReducers } from 'redux'
import eventsReducer from './reducers/events';


const configStore = () => createStore(
  combineReducers({
    events: eventsReducer
  })
);

export default configStore;
