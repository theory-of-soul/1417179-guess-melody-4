import {combineReducers} from "redux";
import {game} from "./reducers/game/game";
import {data} from "./reducers/data/data";

export const rootReducer = combineReducers({
  data,
  game
});
