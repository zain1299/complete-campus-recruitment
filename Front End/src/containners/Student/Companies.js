import React from "react";
import { useSelector } from "react-redux";
import Cards from "../../Components/Card/CardChild";
import Header from "../Header/Header";

function Companies() {
  const admins = useSelector((state) => state.allAdmin);
  const allCompany = admins.company;

  return (
    <div style={{ width: "100%" }}>
      <Header />
      <h3 className="text-center">List of companies here</h3>
      <div className="card-div">
        {allCompany?.map((item, index) => {
          return (
            <Cards
              key={index}
              title={item.firstName + " " + item.lastName}
              key2="Email i'd : "
              value2={item.email}
              text={item.breifProfile}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Companies;
