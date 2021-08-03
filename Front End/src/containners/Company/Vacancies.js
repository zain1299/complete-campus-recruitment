import React from "react";
import Cards from "../../Components/Card/Card";
import Header from "../Header/Header";

function Vacancies() {
  return (
    <div style={{ width: "100%", marginTop: "5rem" }}>
      <Header />
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        VACANCIES HERE
      </h3>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
        }}
      >
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default Vacancies;
