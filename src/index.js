import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { initialStore } from "./store";

import Main from "./Main";

import "./styles.css";

const store = initialStore();

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <Main />
            </Provider>
        </div>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
