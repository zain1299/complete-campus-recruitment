import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Components/Card/CardChild";
import Header from "../Header/Header";
import "../../Styles/Containners/Student/Applied.css";
import { getAppliedJobbsAction } from "../../redux/GetAllAppliedJobs/action";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function AppliedJobs() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const applyJob = state.appliedJob;
  const auth = state.user;

  const appliedJobs = applyJob.appliedJob;

  useEffect(() => {
    if (applyJob.appliedJob.length === 0) {
      dispatch(getAppliedJobbsAction(auth.user._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <h3 className="text-center my-5">Applied Jobs here</h3>
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
