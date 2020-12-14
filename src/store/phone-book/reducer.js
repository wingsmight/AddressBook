import { ADD_BOOK } from "./enum";
import { usersConst } from "../../Data"

let initialState = {
    users: usersConst
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                data: [...state.users, action.payload]
            };
        default:
            return state;
    }
};
