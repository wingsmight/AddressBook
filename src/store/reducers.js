import { combineReducers } from "redux";

import book from "./phone-book/reducer";

const rootReducer = combineReducers({
    book
});

export default rootReducer;
