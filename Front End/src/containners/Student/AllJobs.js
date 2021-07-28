import React from "react";
import Cards from "../../Components/Card/Card";
import StudentHeader from "./Header/StudentHeader";

function AllJobs() {
  return (
    <div style={{ width: "100%", marginTop: "5rem" }}>
      <StudentHeader />
      <h3 style={{ display: "flex", justifyContent: "center" }}>
        All jobs here
      </h3>
      <Cards />
    </div>
  );
}

export default AllJobs;
