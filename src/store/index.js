import { createStore } from "redux";
import rootReducer from "./reducers";

export function initialStore() {
    const store = createStore(rootReducer);

    return store;
}
