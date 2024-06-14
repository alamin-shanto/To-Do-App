import { useState } from "react";
import Todo from "./components/Todo";
import "./components/Header";
import Header from "./components/Header";
import "./App.css";
// import InlineComponent from "./components/InlineComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <Todo />
      {/* <InlineComponent /> */}
    </div>
  );
}

export default App;
