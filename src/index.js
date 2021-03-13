import React from "react";
import ReactDOM from "react-dom";
import Carousel from "./components/Carousel";

import "./styles.scss";

function App() {
  const slides = [
    {
      content: (
        <img
          alt="slide-1"
          src="https://images.unsplash.com/photo-1613906031368-54bde2763e8a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixlib=rb-1.2.1&q=80&w=1920"
        />
      )
    },
    {
      content: (
        <div className="bg-red-500 h-full text-white flex items-center justify-center text-3xl">
          Slide 2
        </div>
      )
    },
    {
      content: (
        <div className="bg-green-500 h-full text-white flex items-center justify-center text-3xl">
          Slide 3
        </div>
      )
    }
  ];
  return (
    <>
      <Carousel slides={slides} height={400} />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
