import React from "react";
import "./style.css";
import { PhoneBook } from "./components/PhoneBook";
import { Provider } from "react-redux";
import { store } from "./store/store";




export default function App() {
  return (
    <Provider store={store}>
        <PhoneBook />
    </Provider>
  );
}
