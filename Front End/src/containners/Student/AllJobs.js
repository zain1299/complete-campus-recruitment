import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../Components/Card/Card";
import { applyJobAction } from "../../redux/ApplyJobs/action";
import Header from "../Header/Header";

function AllJobs() {
  const jobDetails = useSelector((state) => state.allJob);
  const auth = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const allJobs = jobDetails.getJobs;

  const studentId = auth.user._id;

  const applyJobs = (jobId) => {
    const apply = {
      studentId,
      jobId,
    };
    dispatch(applyJobAction(apply));
  };

  return (
    <div style={{ width: "100%", marginTop: "5rem" }}>
      <Header />
      <h3 className="text-center">All jobs here</h3>
      <div className="my-5" style={{ display: "flex" }}>
        {allJobs?.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.title}
              text={item.description}
              key2="Experience Required : "
              value2={item.experience}
              key3="Tentative Salary : "
              value3={item.minimum_salary}
              key4="category : "
              value4={item.category}
              last_date={item.last_date}
              onClick={() => applyJobs(item._id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AllJobs;
