import React from "react";
import Title from "./Title";
import { tours } from "../data";
import Tours from "./Tours";



const Tour = () => {
  return (
    <section className="section" id="featured">
      <Title title="Featured" subTitle="Tours" />

      <div className="section-center featured-center">
        {tours.map((tour) => {
          return <Tours key={tour.id} {...tour}  />;
        })}

      </div>
      <div className="tour-btn">
        <a href="#about" className="btn">
          all tours
        </a>
      </div>
    </section>
  );
};

export default Tour;
