import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";

const cart = [];

//State trong redux là reducer
const rootReducer = combineReducers({
  //Các state ứng dụng sẽ được lưu tại đây

  cartReducer: cartReducer ,
});

export const store = createStore(rootReducer);
