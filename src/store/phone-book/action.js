import { ADD_BOOK } from "./enum";

export const addBook = data => ({
    type: ADD_BOOK,
    payload: data
});
