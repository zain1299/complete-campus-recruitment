import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Cards from "../../Components/Card/Card";
import Header from "../Header/Header";
import "../../Styles/Containners/Company/Vacancies.css";
import ReadOnlyModals from "../../Components/ReadOnlyModal";
import { deleteAction } from "../../redux/DeleteJobs/action";
import { getAppliedStudentsAction } from "../../redux/GetAllAppliedStudents/action";

function Vacancies() {
  const [appliedStudent1, setAppliedStudent] = useState([]);
  const [temp, setTemp] = useState(Date.now());
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const state = useSelector((state) => state);
  const jobDetails = state.allJob;
  const auth = state.user;
  const applied = state.appliedStudent;

  const allJobs = jobDetails.getJobs;
  const allStudents = applied.appliedStudents;

  const dispatch = useDispatch();

  const deleteJob = (id) => {
    dispatch(deleteAction(id));
  };

  const HandlerAppliedStudent = (jobId) => {
    dispatch(getAppliedStudentsAction(jobId));
  };

  useEffect(() => {
    if (allStudents.length !== 0) {
      setAppliedStudent(allStudents);
      setTemp(Date.now());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-div">
      <Header />
      <h3 className="text-center ">VACANCIES HERE</h3>
      <div className="child-div my-4">
        {allJobs
          ?.filter((filtered) => filtered.company_id === auth?.user._id)
          .map(function (item, index) {
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
                key5="Posted By : "
                value5={auth?.user.firstName + " " + auth?.user.lastName}
                last_date={item.last_date}
                onClick={() => deleteJob(item._id)}
                dropDownValue={appliedStudent1}
                dropDownClickHandler={() => HandlerAppliedStudent(item._id)}
                temp={temp}
              />
            );
          })}
      </div>
      <ReadOnlyModals
        // data={appliedStudent1}
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      />
    </div>
  );
}

export default Vacancies;
