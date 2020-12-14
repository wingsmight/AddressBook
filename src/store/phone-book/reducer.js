import { ADD_BOOK } from "./enum";

let initialState = {
    data: [
        {
            first_name: "Иван",
            last_name: "Иванов",
            phone_number: "89232551718"
        }
    ]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_BOOK:
            return {
                ...state,
                data: [...state.data, action.payload]
            };
        default:
            return state;
    }
};
