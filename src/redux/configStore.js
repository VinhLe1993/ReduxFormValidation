import { combineReducers, createStore } from "redux";
import { cartReducer } from "./reducers/cartReducer";
import { BTQLReducer } from "./reducers/BTQLReducer";



//State trong redux là reducer
const rootReducer = combineReducers({
  //Các state ứng dụng sẽ được lưu tại đây

  cartReducer ,
  BTQLReducer,
});

export const store = createStore(rootReducer);
