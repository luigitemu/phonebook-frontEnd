import React from "react";
import "./style.css";
import { PhoneBook } from "./components/PhoneBook";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { PhoneList } from "./components/PhoneList";




export default function App() {
  return (
    <Provider store={store}>
      <div className="section-cont d-flex flex-row row">
        <div className="section-left flex-fill align-self-center col-sm-12 col-md-6">
          <PhoneList />
          </div>
        <div className="section-right flex-fill align-self-center col-6 col-sm-12 col-md-6">
          <PhoneBook />
        </div>
      </div>
    </Provider>
  );
}
