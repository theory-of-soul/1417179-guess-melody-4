import {combineReducers} from "redux";
import {game} from "./reducers/game/game";
import {data} from "./reducers/data/data";
import {user} from "./reducers/user/user";

export const rootReducer = combineReducers({
  data,
  game,
  user
});
