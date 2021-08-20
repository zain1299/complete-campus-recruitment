import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Components/Card/CardChild";
import Header from "../Header/Header";
import "../../Styles/Containners/Student/Applied.css";

function AppliedJobs() {
  const applyJob = useSelector((state) => state.appliedJob);

  const appliedJobs = applyJob.appliedJob;

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <h3 className="text-center">Applied Jobs here</h3>
      <div className="card-div">
        {appliedJobs.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.title}
              text={item.description}
              key2="Required Experience : "
              value2={item.experience}
              key3="Tentative Salary : "
              value3={item.minimum_salary}
              key4="Category : "
              value4={item.category}
              last_date={`Last date to apply is ${item.last_date}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AppliedJobs;
