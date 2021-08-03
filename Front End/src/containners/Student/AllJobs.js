import React from "react";
import Cards from "../../Components/Card/Card";
import Header from "../Header/Header";

function AllJobs() {
  return (
    <div style={{ width: "100%", marginTop: "5rem" }}>
      <Header />
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        All jobs here
      </h3>
      <Cards />
    </div>
  );
}

export default AllJobs;
